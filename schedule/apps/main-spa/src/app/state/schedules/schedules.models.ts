/**
 * Interface for the 'Schedules' data
 */
export interface SchedulesEntity {
  id: number; // Primary ID
  date: Date,
  tutor: string,
  place: string,
  type: string,
  subject: string,
}
