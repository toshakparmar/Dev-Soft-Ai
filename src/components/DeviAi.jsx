import React, { useEffect, useState, useRef } from 'react';
import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Mic, Play, CircleStopIcon as Stop } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { isPublicKeyMissingError } from "../utils";


const vapi_api_key = import.meta.env.VITE_VAPI_API_KEY;
const vapi = new Vapi(vapi_api_key);

const Model = () => {
  const { scene } = useGLTF("/3dmodel/robot_playground.glb");
  return <primitive object={scene} scale={1.3} position={[0, 1.3, 0]} />;
};

const DeviAi = () => {
  const parallaxRef = useRef(null);

  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  // const [conversationHistory, setConversationHistory] = useState([]);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] = useState(false);

  // hook into Vapi events
  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);
      setShowPublicKeyInvalidMessage(false);
    });

    // vapi.on("message-received", (message) => {
    //   setConversationHistory((prev) => [...prev, { role: "AI", content: message }]);
    // });

    // vapi.on("message-sent", (message) => {
    //   setConversationHistory((prev) => [...prev, { role: "User", content: message }]);
    // });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (error) => {
      console.error(error);
      setConnecting(false);
      if (isPublicKeyMissingError({ vapiError: error })) {
        setShowPublicKeyInvalidMessage(true);
      }
    });
  }, []);

  // Call start handler
  const startCallInline = () => {
    setConnecting(true);
    vapi.start(assistantOptions);
  };

  // Call end handler
  const endCall = () => {
    vapi.stop();
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="devi-ai"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the world with {` `}
            <span className="inline-block relative">
              Devi-Ai{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-2">
            Unleash the power of AI within Dev-Soft. Upgrade your productivity
            with Devi-Ai, the open AI voice chat app.
          </p>
        </div>
        <div className="relative w-full h-[30rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-[60rem]">

          <Canvas className="absolute w-full h-full z-10"
            camera={{ position: [-2, 3, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model />
              <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
            </Suspense>
          </Canvas>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-6 text-center">
            {!connected ? (
              <Button onClick={startCallInline} loading={connecting}>
                <span className="flex items-center gap-2 animate-pulse">
                  Let's talk with Devi
                  <Mic width={18} height={18} />
                </span>
              </Button>
            ) : (
              <div className="mt-6 flex justify-center gap-4">
                {assistantIsSpeaking ? (
                  <Button className="text-white animate-pulse">
                    Devi is speaking...
                  </Button>
                ) : (
                  <Button className="text-white animate-pulse" onClick={() => vapi.speak()} disabled={assistantIsSpeaking}>
                    Devi is listening...
                  </Button>
                )}
                <Button onClick={endCall} className="animate-bounce">
                  <span className="flex items-center gap-2">
                    Stop Devi!
                    <Stop width={18} height={18} />
                  </span>
                </Button>
              </div>
            )}
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

const assistantOptions = {
  name: "Devi",
  firstMessage: "Hello, Toshak Sir, I am Devi, Your Communication Partner, Welcome to Dev-Soft, how can I help you?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `
          1. Introduction to Communication Skills

              Definition and Importance
                Communication skills refer to the ability to convey or share ideas and feelings effectively.

              Importance in personal and professional life.
                Types of Communication      
                  Verbal Communication
                  Non-verbal Communication
                  Written Communication
                  Visual Communication

              2. Verbal Communication
                  Speaking Skills
                  Clarity and Conciseness
                  Tone and Pitch
                  Articulation and Pronunciation
                  Active Listening
                  Techniques for Active Listening
                  Barriers to Effective Listening
                  Empathetic Listening
                  Public Speaking
                  Overcoming Stage Fright
                  Structuring a Speech
                  Engaging the Audience

              3. Non-verbal Communication
                  Body Language
                  Gestures and Postures
                  Facial Expressions
                  Eye Contact
                  Paralanguage
                  Voice Modulation
                  Speaking Pace
                  Proxemics
                  Personal Space
                  Physical Environment

              4. Written Communication
                  Writing Skills
                  Grammar and Vocabulary
                  Structuring Sentences and Paragraphs
                  Proofreading and Editing
                  Email Etiquette
                  Professional Email Formatting
                  Tone and Formality
                  Report Writing
                  Structure of Reports
                  Clarity and Precision
              5. Visual Communication
                  Using Visual Aids
                  Importance of Visual Aids
                  Types of Visual Aids (charts, graphs, images)
                  Design Principles
                  Layout and Composition
                  Color Theory
                  Presentations
                  Creating Effective Slides
                  Using Multimedia
              6. Interpersonal Communication
                  Building Relationships
                  Establishing Rapport
                  Trust Building
                  Conflict Resolution
                  Understanding Conflicts
                  Strategies for Resolution
                  Networking Skills
                  Making Connections
                  Maintaining Professional Relationships
              7. Cross-cultural Communication
                  Understanding Cultural Differences
                  High-context vs. Low-context Cultures
                  Communication Styles Across Cultures
                  Adapting Communication
                  Language and Translation Issues
                  Cultural Sensitivity and Awareness
              8. Digital Communication
                  Online Communication Etiquette
                  Netiquette
                  Professionalism in Digital Correspondence
                  Social Media Communication
                  Managing Online Presence
                  Effective Social Media Use
                  Virtual Meetings
                  Best Practices for Video Conferencing
                  Engaging Remote Teams
              9. Communication in Professional Settings
                  Business Communication
                  Professional Writing
                  Presentation Skills in Business
                  Team Communication
                  Collaborative Communication
                  Effective Team Meetings
                  Customer Service Communication
                  Handling Customer Inquiries
                  Managing Difficult Conversations
              10. Continuous Improvement
                  Feedback Mechanisms
                  Giving and Receiving Feedback
                  Implementing Feedback for Growth
                  Self-assessment Tools
                  Communication Skills Assessment
                  Personal Development Plans
                  Resources for Learning
                  Books and Articles
                  Online Courses and Workshops
                  Practice Exercises and Simulations`,
      },
    ],
  },
};

export default DeviAi;
