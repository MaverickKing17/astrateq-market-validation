/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SimulationQuestion, ReferralTier } from "./types";

export const QUESTIONS: SimulationQuestion[] = [
  {
    id: 1,
    text: "How many hours of driving do you typically do per day?",
    category: "Exposure",
    options: [
      { id: "a", text: "Less than 1 hour", scoreWeight: 90 },
      { id: "b", text: "1 to 2 hours", scoreWeight: 85 },
      { id: "c", text: "2 to 4 hours", scoreWeight: 75 },
      { id: "d", text: "Over 4 hours", scoreWeight: 65 }
    ]
  },
  {
    id: 2,
    text: "What is your primary driving environment?",
    category: "Environment",
    options: [
      { id: "a", text: "Mainly city roads & metropolitan streets", scoreWeight: 80 },
      { id: "b", text: "Suburban roads & multi-lane highways", scoreWeight: 85 },
      { id: "c", text: "Long-haul highway corridors", scoreWeight: 70 },
      { id: "d", text: "Rural highways or unpaved backroads", scoreWeight: 65 }
    ]
  },
  {
    id: 3,
    text: "At what time of day do you most frequently experience driving fatigue?",
    category: "Fatigue Patterns",
    options: [
      { id: "a", text: "Early morning commutes (before 7 AM)", scoreWeight: 75 },
      { id: "b", text: "Mid-afternoon slump (2 PM - 5 PM)", scoreWeight: 70 },
      { id: "c", text: "Late night / after sunset driving", scoreWeight: 60 },
      { id: "d", text: "Rarely or almost never feel fatigued while driving", scoreWeight: 95 }
    ]
  },
  {
    id: 4,
    text: "How do you usually respond to signs of tiredness or distraction?",
    category: "Behavioral Habits",
    options: [
      { id: "a", text: "Pull over immediately to rest or walk around", scoreWeight: 95 },
      { id: "b", text: "Open a window or turn up the audio volume", scoreWeight: 75 },
      { id: "c", text: "Push through to reach my destination faster", scoreWeight: 55 },
      { id: "d", text: "Rely on coffee, energy drinks, or caffeine pills", scoreWeight: 65 }
    ]
  },
  {
    id: 5,
    text: "How interested are you in receiving private, on-device alerts if attention loss is detected?",
    category: "Acceptance",
    options: [
      { id: "a", text: "Very interested (provided my data never leaves the device)", scoreWeight: 95 },
      { id: "b", text: "Somewhat interested in baseline insights", scoreWeight: 85 },
      { id: "c", text: "Only if it integrates natively with my navigation app", scoreWeight: 75 },
      { id: "d", text: "Not interested in any alerts or profiles", scoreWeight: 50 }
    ]
  }
];

export const REFERRAL_TIERS: ReferralTier[] = [
  {
    referralsNeeded: 1,
    name: "Research Supporter",
    perks: "Status recognition on the Canadian validation registry"
  },
  {
    referralsNeeded: 3,
    name: "Founding Cohort",
    perks: "Status recognition + priority placement in future research rounds"
  },
  {
    referralsNeeded: 5,
    name: "Priority Beta",
    perks: "Status recognition + priority placement + early access to research findings"
  },
  {
    referralsNeeded: 10,
    name: "Founder's Circle",
    perks: "Status recognition + priority placement + public acknowledgment as a founding research contributor"
  }
];

export const CANADIAN_REALITIES = [
  {
    title: "Long Highway Commutes",
    description: "Whether cruising the Trans-Canada Highway, Route 117, or the QEW, Canadian drivers frequently face long, hypnotic highway runs where fatigue quietly sets in.",
    icon: "Milestone"
  },
  {
    title: "Winter Visibility & Sub-Zero Ice",
    description: "Driving during whiteout conditions, blizzards, or freezing rain requires absolute, uncompromised cognitive alertness. A split-second lapse can be life-altering.",
    icon: "Snowflake"
  },
  {
    title: "Seasonal Daylight Shifts",
    description: "With early winter sunsets (often before 4:30 PM in most provinces), drivers face sudden shifts in darkness that throw off circadian rhythms and trigger fatigue.",
    icon: "Moon"
  },
  {
    title: "Metropolitan Gridlock Stress",
    description: "Stop-and-go delays across the GTA, Greater Montreal, or Metro Vancouver spike stress levels and accelerate mental fatigue, degrading attention readiness.",
    icon: "TrafficCone"
  }
];

export const APPROACHES = [
  {
    name: "Traditional Dashcams",
    dataTransmission: "Continuous local or cloud loops",
    hardware: "Requires windshield-mounted camera unit",
    privacy: "Saves raw video footage of drivers and external roads",
    insurance: "Manually exported or shared during crash disputes",
    astrateq: false
  },
  {
    name: "Driver Monitoring Cameras",
    dataTransmission: "Real-time active cloud streaming",
    hardware: "Requires specialized cabin infrared sensors",
    privacy: "Constant biometric face & eye tracking analysis",
    insurance: "Direct integration with fleet monitoring databases",
    astrateq: false
  },
  {
    name: "Wearables",
    dataTransmission: "Continuous sync to central mobile servers",
    hardware: "Requires active smartwatches or heart sensors",
    privacy: "Logs highly intimate pulse & skin temperature metrics",
    insurance: "Health & stress profiles open to premium evaluation",
    astrateq: false
  },
  {
    name: "Astrateq Gadgets Research",
    dataTransmission: "Zero cloud upload (100% offline edge logic)",
    hardware: "No hardware required for study participation",
    privacy: "Speculative on-device behavioral simulation",
    insurance: "Absolute and total decoupling from insurers",
    astrateq: true
  }
];

export const FAQS = [
  {
    category: "Scope & Intent",
    question: "What is Astrateq Gadgets?",
    answer: "Astrateq Gadgets is an independent Canadian research and technology validation initiative. We are conducting pre-launch market validation to explore the viability of an offline-first, edge-computing driver awareness assistant. Rather than launching a commercial product, our immediate goal is to validate motorist trust, safety demand, and technical feasibility before investing in physical hardware or custom software development."
  },
  {
    category: "Methodology",
    question: "How does the simulated scoring model work?",
    answer: "During this early validation stage, our 5-question evaluation calculates an alertness and fatigue resilience score based on statistical risk factors—such as diurnal fatigue windows, commute duration stress, environmental visibility variables, and proactive rest responses. This output is processed fully in your browser memory as an educational demonstration of the metrics an active, edge-based software framework would prioritize."
  },
  {
    category: "Privacy & Security",
    question: "Is my driving behavior actively tracked or monitored by this site?",
    answer: "No. This website acts as a static, text-based interactive questionnaire. We do not access your device's camera, GPS sensor, accelerometer, or internal vehicle telemetry. Your inputs are kept completely confidential, processed purely client-side, and are never shared with advertising networks, third-party trackers, or central databases."
  },
  {
    category: "Scope & Intent",
    question: "Who is conducting this research study?",
    answer: "The project is spearheaded by a dedicated team of independent Canadian technology researchers and software engineers. We are passionate about building decentralized, privacy-focused alternatives to commercial cabin surveillance and corporate monitoring systems. Our research objectives and operations are based entirely within Canada."
  },
  {
    category: "Privacy & Security",
    question: "How does edge computing protect driver privacy?",
    answer: "Traditional driver safety systems upload massive, continuous streams of raw video or biometric telemetry to centralized cloud servers, exposing drivers to security breaches. Under a sovereign edge model, all cognitive and facial fatigue heuristic calculations are processed in isolated memory partitions directly on your smartphone. Only localized status signals are calculated, and raw biometric data never leaves the device."
  },
  {
    category: "Data Sharing",
    question: "Will my results be shared with auto insurance providers?",
    answer: "Absolutely not. Our research model is fundamentally decoupled from commercial insurance frameworks, corporate telemetry programs, and government licensing registries. We believe motorists should have absolute, uncompromised ownership of their attention statistics. No insurance sync, sharing, or reporting is designed or possible."
  },
  {
    category: "Participation",
    question: "Is there any cost, deposit, or obligation associated with participation?",
    answer: "No. Participation in our simulation and registration in the active research cohort is 100% free. There are no sales pitches, credit card requirements, pre-launch deposits, or hidden commercial upgrades. This is an exploratory, non-commercial concept-validation study."
  },
  {
    category: "Participation",
    question: "What is the Active Research Cohort, and what does registration involve?",
    answer: "The Active Research Cohort is a registry of forward-thinking Canadian motorists who wish to participate in upcoming phases of our study. Registered participants will receive aggregated cohort statistics (fully anonymized), quarterly research summaries, and priority invitations to test early, non-commercial software prototypes when they enter the field evaluation phase."
  },
  {
    category: "Technical & Hardware",
    question: "How does Astrateq’s concept compare to standard dashboard cameras?",
    answer: "Traditional dashcams record raw, high-resolution video footage of the driver and external environment. Astrateq's software-first concept focuses on evaluating cognitive fatigue indicators via localized mathematical models, avoiding raw video recordings, cloud streaming, and potential third-party data exposures entirely."
  },
  {
    category: "Technical & Hardware",
    question: "Does this system require connection to my vehicle’s OBD-II port?",
    answer: "No. Our edge computing model is designed to work completely independently of your vehicle's physical computer. It operates as an isolated smartphone framework, bypassing the need for OBD-II readers, physical wiring harnesses, or custom in-car integration."
  },
  {
    category: "Canadian Realities",
    question: "How do regional Canadian factors affect driver attention fatigue?",
    answer: "Commuting in Canada presents distinct stress factors: rapid winter daylight shifts (with sunsets before 4:30 PM), freezing rain, whiteout conditions, and heavy highway bottlenecks on corridors like the GTA or Lower Mainland. Our research maps these provincial variables directly to cognitive stress curves."
  },
  {
    category: "Methodology",
    question: "How are the mathematical stress weights (scoreWeight) determined?",
    answer: "The scoring weights used in the exploratory simulator are derived from public road safety research datasets, specifically modeling daylight-dependent circadian fatigue and cumulative mileage risk. These are adjusted for Canadian climate variables to serve as a baseline for future passive edge-based observation thresholds."
  },
  {
    category: "Data Sharing",
    question: "Do you use cookies or track personal user identities across other sites?",
    answer: "No. Our sandboxing principles strictly forbid cross-site tracking or commercial fingerprinting. There are no marketing pixels, social media plugins, or dynamic ad tracking elements implemented on this validation platform. Your participation remains entirely isolated and self-contained."
  },
  {
    category: "Methodology",
    question: "What are the next steps in the validation roadmap?",
    answer: "We are currently in Phase 1 (Concept Validation). If our validation metrics demonstrate significant motorist interest and meet statistical thresholds, Phase 2 will focus on Simulation Analytics, and Phase 3 will investigate edge-computing mobile performance. All milestone reports will be shared transparently with our registered cohort."
  }
];
