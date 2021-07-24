import { Schedule } from './schedule';
export class FlightRoute {
  routeId: string;
  source: string;
  destination: string;
  scheduleId: Schedule;
  constructor(
    routeid?: string,
    source?: string,
    destination?: string,
    scheduleid?: Schedule,

  ) {}
}

