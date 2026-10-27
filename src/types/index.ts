/**
 * Asilia Glow - Core Application Types
 */

export interface ProductBundle {
  id: string;
  name: string;
  volume: string;
  priceKes: number;
  originalPriceKes: number;
  badge?: string;
  description: string;
  features: string[];
  includesGift?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  subtitle: string;
  concentration: string;
  origin: string;
  description: string;
  skinAction: string;
  keyNutrient: string;
}

export interface HotspotPin {
  id: string;
  top: string; // percentage string
  left: string; // percentage string
  title: string;
  category: string;
  description: string;
  technicalDetail: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  skinType: string;
}

export interface OrderItem {
  bundleId: string;
  quantity: number;
  deliveryOption: 'standard' | 'express';
  deliveryFee: number;
}
