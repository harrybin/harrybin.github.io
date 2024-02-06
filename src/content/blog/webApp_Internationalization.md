---
author: Harald Binkle
pubDatetime: 2024-2-01T12:57:00Z
title: improve usual internationalization in typescript projects
postSlug: webApp_Internationalization
featured: false
draft: false
tags:
  - TypeScript
  - react
  - i18n
  - i18next
  - react-intl
  - custom hook
  - WebExtensionMessage
  - typed localization strings
  - no magic strings
description: extend usual internationalization to get rid of magic strings, add additional meta information
---

## conventional usage of internationalization packages

The conventional usage of internationalization packages (like `i18n`, `i18next`, `react-intl` etc.) is very simple, with usually a short translation method named `t()` taking a key of a string located in a json file:
```typescript
// MyComponent.js
[...]
const myDisplayText = t('helloWorldGreeting');
```
```json
// en/MyModule.json
{
   "helloWorldGreeting": "Say hello to the world!",
}
```

This common usage has three big disadvantages in my eyes:
1. the name of the translation method does not tell you anything </br>
  ▶️ **give it a speaking name** </br>
  In times of typescript and getting intellisense and code completion there are no longer arguments for lazy developers to created method names and variable names consisting of one or few characters only.
2. there is a key passed as string to the translate method </br>
  ▶️ **"magic strings" are not refactoring safe, get rid of them** (how to solve this I'll show further down)</br>
  Such "magic string" usages get broken when changing them. Imagine you are working in a large project and like to rename such a magic string key `helloWorldGreeting` to e.g. `helloWorld`.
  Then you need to manually find all occurrences and correct them. If you miss one, you will not know. You will see that only in the running app. </br>
  Also what about a second occurrence of the some key with a different translation?
3. translations of single words or phrases may differ depending on the context </br>
  ▶️ **provide additional meta info the the people translating your base languages** </br>
  Say you are working on a messaging module of your app and the recipient of the message is supposed to be entered into a field labeled `To:` (which is common like in all mail clients). 
  This `To` has the meaning of an recipient. In german you would translate it with an `An:`. </br>
  Somewhere else in your module you handle time spans, like for appointments. Then you will have the user to enter a date for beginning `From:` and the date until the end `To:`. I guess you already got the point. Here you uses the english word `To` in a different context having the meaning of "until".
  In german you would translate that occurrence with `Bis:`. </br>
  One further example for the need of adding context information to a translator is formatting: </br>
  When using not only simple constant string to be translated you may use variables within your text like `Hi, my name is {name}, nice to mee you!`. Then you should tell the `{name}` must not be translated, otherwise a translator may do a translation for `{name}` to Spanish like `{nombre}` resulting in `Hola, mi nombre es {nombre}, ¡encantado de conocerte!`. </br>
  Or imagine you have a component accepting markdown strings...
4. most projects collect all translation strings in a single json file which causes even with some modern IDEs very long loading times for those files. </br>
  ▶️ **split your translation json files into several easily maintainable files** 

## solving those disadvantages
### 1. a speaking name for the translation method
  When using `react` I suggest to wrap the `t()` method with a custom hook. I'll provide a piece of code later on when we also attempt to solve the other two issues.

### 2. get rid of magic strings for translations
  I guess there is more than one solution for this but I like to show which way I decided to go: _Interfaces_ </br>
  I create an interface consisting of fields used as key for you translations.
  ```typescript
  export default interface I18nTexts {
    helloWorldGreeting: string;
    helloWorld: string;
    [...]
  }
  ```
  :warning: **Here is the only drawback:** Yes, when adding a new string for translation you need to add it to the interface as well as within the json file.

### 3. provide additional meta info for human translators
  Instead of using simply key-value pairs in your json file you may use e.g. the [Mozilla WebExtension Internationalization Format](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization). This allows you to define a _description_ beside the _message_:
  ```json
  // en/MyModule.json
{
   "helloWorldGreeting": {
      "message": "Say hello to the world! My name is {name}, nice to mee you!",
      "description": "the word 'name' within the curly braces is a variable name and must not be translated",
   },
   [...]
}
  ```
  Now you may ask can i18n/react-intl handle this? - Not like this. </br>
  But now we put 1-3 together and add a transform method to make `react-intl` able to handle this:
  #### A method transforming Mozilla WebExtension Internationalization Format to react-intl readable:
  ```typescript
export type PrimitiveType = string | number | boolean | null | undefined | Date;

export default function translateText(
    intl: IntlShape,
    textKey: keyof I18nTexts,
    paramsObj?: Record<string, PrimitiveType>
) {
    try {
        return intl.formatMessage({ id: textKey }, paramsObj);
    } catch (error) {
        // Do not log in test or production
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Translation text key ${textKey} not found.`);
        }
        return textKey;
    }
}
  ```
#### the custom hook replacing the `t()` method (translateText method in case of react-intl)
```typescript
export type Translate = (textKey: keyof I18nTexts, paramsObj?: Record<string, PrimitiveType> | undefined) => string;

export function useTranslation(): Translate {
    const intl = useIntl();
    return (textKey: keyof I18nTexts, paramsObj?: Record<string, PrimitiveType>) => {
        return translateText(intl, textKey, paramsObj);
    };
}
```
#### the type definition for Mozilla WebExtension and the adjusted interface
```typescript
/**
 * wrapper format for i18n messages. This format also allows integration with weblate as a translation system.
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
 */
export interface WebExtensionMessage {
    message: string;
    description?: string;
}

export default interface I18nTexts{
  helloWorldGreeting: WebExtensionMessage;
  helloWorld: WebExtensionMessage;
  [...]
}
```

### 4. split up localization files
With the work already done we got the `I18nTexts` interface we simply need to "split" them.
But passing them to `react-intl` again means we need a custom translation provider:
#### compose your `I18nTexts` interface the way you like to split the files
```typescript
export default interface I18nTexts extends I18nTextsCommon, I18nTextsModule {}

export default interface I18nTextsCommon {
    app_title: WebExtensionMessage;
    loading: WebExtensionMessage
    [...]
}
```
#### compose the json files content for using in the custom translation provider
```typescript
import * as deMessagesCommon from './de/i18nCommon.json';
import * as deMessagesModule from './de/i18nModule.json';
import * as enMessagesCommon from './en/i18nCommon.json';
import * as enMessagesModule from './en/i18nModule.json';

export const Translations = {
    de: { ...deMessagesCommon, ...deMessagesModule },
    en: { ...enMessagesCommon, ...enMessagesModule },
};
```
#### your custom translation provider putting all together
```typescript
import React, { ReactElement, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { Translations } from './Translations';
import { WebExtensionMessage } from './WebExtensionMessage';

export enum SupportedLanguages {
    de = 'de',
    en = 'en',
}

export function TranslationProvider(props: { children: ReactNode }): ReactElement {
    const [langState, _setLangState] = React.useState<SupportedLanguages>(SupportedLanguages.de);
    const translations = Translations;
    const translationsForLocale = translations[langState];
    const messagesForLocale = mapWebExtensionMessages(translationsForLocale);

    return (
        <IntlProvider locale={langState} messages={messagesForLocale}>
            {props.children}
        </IntlProvider>
    );
}


function mapWebExtensionMessages(messages: { [key: string]: WebExtensionMessage }): Record<string, string> {
    const result: Record<string, string> = {};
    Object.keys(messages).forEach((key) => {
        result[key] = messages[key].message;
    });
    return result;
}

```

Now you got all four disadvantages resolved.


Please leave a comment for any thoughts about this.

In my next post I will show you how the get IDE support creating and editing your translation files.