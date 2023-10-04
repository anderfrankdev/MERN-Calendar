export interface EventStruc {
  title: string;
  notes?: string;
  start: Date;
  end: Date;
  user?: {
    _id: string;
    name: string;
  };
}
