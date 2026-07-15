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
    name: "Continuous Third-Party Monitoring",
    dataTransmission: "Constant cloud upload",
    hardware: "Requires external active cameras",
    privacy: "Cloud database storage of video feeds",
    insurance: "High risk of telemetry sharing",
    astrateq: false
  },
  {
    name: "Cloud-First Data Collection",
    dataTransmission: "Frequent batched server uploads",
    hardware: "Requires phone mount or plugged link",
    privacy: "Centralized server profile storage",
    insurance: "Data may be subpoenaed or sold",
    astrateq: false
  },
  {
    name: "Hardware-Dependent Systems",
    dataTransmission: "Local CAN-bus integration",
    hardware: "Requires costly built-in vehicle sensors",
    privacy: "Vendor proprietary data silo",
    insurance: "Tied to vehicle model restrictions",
    astrateq: false
  },
  {
    name: "Astrateq's Concept",
    dataTransmission: "Zero cloud upload (completely offline)",
    hardware: "No hardware required to participate",
    privacy: "User-controlled, on-device edge processing",
    insurance: "Complete separation from insurers",
    astrateq: true
  }
];

export const FAQS = [
  {
    question: "What is Astrateq?",
    answer: "Astrateq is a Canadian technology exploration initiative. We are conducting pre-launch market validation to explore whether drivers want a privacy-first, edge-powered 'Driver Awareness Intelligence' software solution."
  },
  {
    question: "How does the simulated scoring model work?",
    answer: "For this validation and research study, all profile outputs and scores are simulated based on a conceptual behavioral model of your driving patterns. There is no active sensor, hardware connection, or real-time camera tracking. The results demonstrate the style of output a fully implemented software module could provide."
  },
  {
    question: "Is my driving data tracked, stored, or shared?",
    answer: "No. The simulation runs entirely on your device. We do not track, collect, or store real-time driving telemetry, GPS locations, speed logs, or vehicle identifiers. We have absolutely no links to auto insurers, government registries, or advertising networks."
  },
  {
    question: "Is there any cost to participate?",
    answer: "None. This is a purely academic and industry concept-validation study. There are no payments, reservations, deposits, or hidden charges. The live simulation and Research Cohort are completely free of charge."
  },
  {
    question: "Is special hardware required?",
    answer: "No. The Astrateq concept is engineered as a software-only approach designed to run on existing modern consumer smartphones. No hardware or custom vehicle modifications are designed or committed."
  }
];
