/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuestionOption {
  id: string;
  text: string;
  scoreWeight: number; // For weighting mock scoring calculations
}

export interface SimulationQuestion {
  id: number;
  text: string;
  category: string;
  options: QuestionOption[];
}

export interface SimulationAnswers {
  [questionId: number]: string; // optionId
}

export interface ReferralTier {
  referralsNeeded: number;
  name: string;
  perks: string;
}

export interface ReferralState {
  code: string;
  referredByCode: string | null;
  referralCount: number;
  joinedCohort: boolean;
  userEmail: string;
}
