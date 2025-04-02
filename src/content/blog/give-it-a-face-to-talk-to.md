---
title: "Give it a Face to Talk To"
description: "A guide to building a React-based AI Bot UI with speech-to-text and text-to-speech capabilities."
publishDate: "2025-04-01"
author: "Harry Bin"
tags:
  [
    "React",
    "AI",
    "Speech Integration",
    "OpenAI",
    "Microsoft Cognitive Services",
  ]
draft: true
---

# Why Build a Speaking Avatar Instead of a Text-Based Chatbot?

## Another Chatbot / The 1001 tutorial for creating a chatbot?

### No, it will be a speaking avatar!

Incorporating a speaking avatar into your chatbot experience offers several advantages over a purely text-based interface. While text-based chatbots are effective for many use cases, a speaking avatar adds a layer of interactivity and engagement that can significantly enhance user experience.

### Key Benefits:

1. **Enhanced User Engagement**:

   - A speaking avatar creates a more immersive and human-like interaction, making users feel more connected to the bot.
   - The combination of voice and visual elements captures attention more effectively than text alone.

2. **Accessibility**:

   - Voice interactions make the chatbot accessible to users with visual impairments or those who prefer auditory communication.
   - It also caters to users who may find typing inconvenient or challenging.

3. **Emotional Connection**:

   - A speaking avatar can convey tone, emotion, and personality through voice and facial expressions, fostering a stronger emotional connection with users.
   - This is particularly valuable in applications like mental health support, education, and customer service.

4. **Faster Communication**:

   - Speaking allows for faster information exchange compared to typing and reading text, improving efficiency in scenarios where time is critical.

5. **Brand Differentiation**:
   - A speaking avatar sets your chatbot apart from competitors, showcasing innovation and a commitment to user-centric design.

By integrating a speaking avatar, you can elevate your chatbot from a functional tool to an engaging, accessible, and emotionally resonant experience.

---

# The goal is about integrating Azure's OpenAI Service, Microsoft Cognitive Services, and using Avatar Lip-Syncing for an Interactive AI Bot

This integration allows users to engage with the bot through natural speech, enhanced by a visually appealing animated avatar that synchronizes its lip movements with the AI-generated spoken output.

---

## Core Components

### 1. **Microsoft Cognitive Services for Speech Integration**

Microsoft Cognitive Services offers a comprehensive **Speech SDK** with the following features:

- **Speech-to-Text**: Converts spoken language into text.
- **Text-to-Speech**: Synthesizes text into natural-sounding speech.
- **Viseme Data**: Provides viseme data (phoneme-to-lip-shape mappings) to animate avatar lip movements in sync with speech.

#### Functionality:

1. **Speech-to-Text**:

   - The bot captures user voice input via a microphone.
   - The Speech SDK processes the audio and converts it into text.

2. **Text-to-Speech with Lip-Sync**:
   - The bot generates a response (e.g., from OpenAI).
   - The Speech SDK converts the text into speech and provides corresponding **viseme data**.
   - The viseme data drives the avatar's lip animations, creating a synchronized visual.

---

### 2. **Azure OpenAI Integration**

Azure OpenAI's GPT models provide the bot's conversational intelligence, generating contextually relevant responses.

#### Functionality:

1. The bot sends the user's text input (converted from the user's speech) to the Azure OpenAI API.
2. Azure OpenAI processes the input and returns a generated text response.
3. The response is converted into speech using Microsoft Cognitive Services, and viseme data is provided for animating the avatar.

---

### 3. **Avatar Lip-Syncing Implementation**

Avatar lip-syncing enhances the bot's visual appeal. Viseme data from Microsoft Cognitive Services drives real-time lip movements.

#### Functionality:

1. The **Speech SDK** generates viseme data during text-to-speech synthesis.
2. Viseme data maps to specific lip shapes.
3. The avatar's lip movements update in real-time based on the viseme data.

---

### 4. **React Application Integration**

The entire functionality is integrated into a React application for web accessibility. The React component manages user interactions, displays conversations, and animates the avatar.

---

## Pain Points Solved

Building such a project involves addressing several technical challenges:

1. **Real-Time Synchronization**:

   - Synchronizing the avatar's lip movements with the speech output in real-time requires precise handling of viseme data and rendering updates.
   - especially in React you need to take care not to re-render when not needed; use states with caution.

2. **Latency Management**:

   - Ensuring low latency in speech recognition, AI response generation, and text-to-speech synthesis is critical for a seamless user experience.
   - Your code for processing the AI model's text results and applying visemes to the avatar needs to be efficient. Otherwise, you will have a large gap between questions and the bot's answer or improperly synced lips of the avatar.

---

## Rendering the 3D-Avatar in React

For rendering an avatar, you first need to get one. There are free avatars available, but most of them are not viseme-capable.

The easiest way is to use a predefined avatar from the Microsoft Aure Services.
[Here in the Speech Studio](https://speech.microsoft.com/portal/3cf6c385d1e14645a0685128d3b96f23/livechat) you can try out voices and avatar bodies.
The studio also provies example integration code.

## MS Avatar

### Example Usage of MS-Avatar

Below is an example of how to use the `useMSAvatar` hook and `MSAvatarPanel` component to integrate the MSAvatar into your React application:

```tsx
import React, { useRef, useEffect } from "react";
import useMSAvatar from "./useMSAvatar";
import MSAvatarPanel from "./MSAvatarPanel";

function App() {
  const audioRef = useRef < HTMLAudioElement > null;
  const videoRef = useRef < HTMLVideoElement > null;

  const { load, unload, speakNext, stopSpeaking } = useMSAvatar();

  useEffect(() => {
    const avatarConfig = {
      talkingAvatarCharacter: "DefaultCharacter",
      talkingAvatarStyle: "DefaultStyle",
      greenscreen: false,
    };

    const speechConfig = {
      subscriptionKey: "YOUR_SUBSCRIPTION_KEY",
      region: "YOUR_REGION",
      voice: "en-US-JennyNeural", // choose a voice
      speakingStyle: "cheerful",
    };

    if (audioRef.current && videoRef.current) {
      load(avatarConfig, speechConfig, audioRef.current, videoRef.current);
    }

    return () => {
      unload();
    };
  }, [load, unload]);

  const handleSpeak = () => {
    speakNext("Hello! I am your speaking avatar.");
  };

  const handleStop = () => {
    stopSpeaking();
  };

  return (
    <div>
      <MSAvatarPanel audio={audioRef} video={videoRef} />
      <button onClick={handleSpeak}>Speak</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
```

The `MSAvatarPanel` component looks like this:

```tsx
interface MSAvatarPanelProps {
  audio: React.RefObject<HTMLAudioElement | undefined>;
  video: React.RefObject<HTMLVideoElement | undefined>;
}

function MSAvatarPanel({ audio, video }: MSAvatarPanelProps) {
  return (
    <Stack width="auto" height="100%" style={{ background: "white" }}>
      <audio ref={audio as Ref<HTMLAudioElement>} id="audioPlayer" autoPlay />
      <video
        ref={video as Ref<HTMLVideoElement>}
        id="videoPlayer"
        autoPlay
        playsInline
        width="100%"
        height="100%"
      />
    </Stack>
  );
}

export default React.memo(MSAvatarPanel);
```

I will not explain every method imported from the `useMSAvatar` hook, but two of them are esstial:

### `load` with its `setupWebRTC`

This funtion

```tsx
function load(
  config: AvatarConfig,
  speechConfig: SpeechConfig,
  audioNode: HTMLAudioElement,
  videoNode: HTMLVideoElement
) {
  audio.current = audioNode;
  video.current = videoNode;

  voice.current = speechConfig.voice;
  speakingStyle.current = speechConfig.speakingStyle;

  const speechSynthesisConfig = sdk.SpeechConfig.fromSubscription(
    speechConfig.subscriptionKey,
    speechConfig.region
  );

  const avatarConfig = new sdk.AvatarConfig(
    config.talkingAvatarCharacter,
    config.talkingAvatarStyle,
    new sdk.AvatarVideoFormat()
  );

  console.log("Avatar config: " + JSON.stringify(config));
  if (config.greenscreen) avatarConfig.backgroundColor = "00B140FF";

  avatarSynthesizer.current = new sdk.AvatarSynthesizer(
    speechSynthesisConfig,
    avatarConfig
  );

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://${speechConfig.region}.tts.speech.microsoft.com/cognitiveservices/avatar/relay/token/v1`
  );

  xhr.setRequestHeader(
    "Ocp-Apim-Subscription-Key",
    speechConfig.subscriptionKey
  );
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const responseData = JSON.parse(this.responseText);
      setupWebRTC(
        responseData.Urls[0],
        responseData.Username,
        responseData.Password
      );
    }
  });
  xhr.send();
}

function setupWebRTC(
  iceServerUrl: string,
  iceServerUsername: string,
  iceServerCredential: string
) {
  if (avatarSynthesizer.current === undefined) {
    console.warn("Avatar not loaded!");
    return;
  }

  // Create WebRTC peer connection
  peerConnection.current = new RTCPeerConnection({
    iceServers: [
      {
        urls: [iceServerUrl],
        username: iceServerUsername,
        credential: iceServerCredential,
      },
    ],
  });

  // Fetch WebRTC video stream and mount it to an HTML video element
  peerConnection.current.ontrack = (event: RTCTrackEvent) => {
    if (!audio.current || !video.current) {
      console.warn("audio or video tag not found!");
      return;
    }

    if (event.track.kind === "audio") {
      audio.current.srcObject = event.streams[0]!;
    }

    if (event.track.kind === "video") {
      video.current.srcObject = event.streams[0]!;
    }
  };

  // Make necessary update to the web page when the connection state changes
  peerConnection.current.oniceconnectionstatechange = _ => {
    console.log("WebRTC status: " + peerConnection.current!.iceConnectionState);
  };

  // Offer to receive 1 audio, and 1 video track
  peerConnection.current.addTransceiver("video", { direction: "sendrecv" });
  peerConnection.current.addTransceiver("audio", { direction: "sendrecv" });

  // start avatar, establish WebRTC connection
  avatarSynthesizer.current
    .startAvatarAsync(peerConnection.current)
    .then((r: sdk.SynthesisResult) => {
      if (r.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("Avatar started. Result ID: " + r.resultId);
      } else {
        if (r.reason === sdk.ResultReason.Canceled) {
          const cancellationDetails = sdk.CancellationDetails.fromResult(
            r as sdk.SpeechSynthesisResult
          );
          if (cancellationDetails.reason === sdk.CancellationReason.Error) {
            console.error(cancellationDetails.errorDetails);
          }

          console.error(
            "Unable to start avatar: " + cancellationDetails.errorDetails
          );
        } else {
          console.error("Unable to start avatar. Result ID: " + r.resultId);
        }
      }
    })
    .catch((error: Error) => {
      throw new Error("Avatar failed to start. Error: " + error);
    });
}
```

### speakNext

```tsx
async function speakNext(text: string) {
  if (avatarSynthesizer.current === undefined || voice.current === undefined) {
    console.warn("Avatar not loaded!");
    return;
  }

  let ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts' xml:lang='en-US'><voice name='${voice.current}'><mstts:express-as style='${speakingStyle.current}' styledegree="2"><mstts:ttsembedding speakerProfileId=''><mstts:leadingsilence-exact value='0'/>${htmlEncode(text)}</mstts:ttsembedding></mstts:express-as></voice></speak>`;

  await avatarSynthesizer.current
    .speakSsmlAsync(ssml)
    .then((result: any) => {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log(
          `Avatar synthesized for text [ ${text} ]. Result ID: ${result.resultId}`
        );
      } else {
        console.warn(
          `Error occurred while speaking. Result ID: ${result.resultId}`
        );
      }
    })
    .catch((error: Error) =>
      console.error(`Error occurred while speaking: [ ${error} ]`)
    );
}
```

---

## Own avatar

I decided to use [Avaturn](https://hub.avaturn.me/) for generating a custom avatar slightly looking like me. That avatar also supports viseme, which is a must in our case. You can export it as a `.glb` file.
![avatar](image.png)

### Loading the Avatar in React

The `.glb` file exported from Avaturn is loaded into the React application using a 3D rendering library like [Three.js](https://threejs.org/) or [react-three-fiber](https://github.com/pmndrs/react-three-fiber). Here's how the avatar is loaded:

1. Import the `.glb` file into the React component using a loader such as `GLTFLoader` from `three/examples/jsm/loaders/GLTFLoader`.
2. Use the `Canvas` component from `react-three-fiber` to render the 3D avatar.
3. Apply viseme data to the avatar's lip movements in real-time during speech synthesis.

#### Example Workflow:

- The `.glb` file is loaded into the scene when the React component mounts.
- The avatar's mesh is updated dynamically based on viseme data provided by Microsoft Cognitive Services.

```jsx
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";

function Avatar() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/path/to/avatar.glb", gltf => {
      avatarRef.current = gltf.scene;
    });
  }, []);

  return (
    <Canvas>
      {avatarRef.current && <primitive object={avatarRef.current} />}
    </Canvas>
  );
}
```

This ensures the avatar is properly loaded and ready for interaction.
