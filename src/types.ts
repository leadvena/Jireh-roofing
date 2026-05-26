export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InspectionRequest {
  id: string;
  name: string;
  phone: string;
  address: string;
  message: string;
  status: 'pending' | 'reviewed';
  date: string;
}
