/**
 * Interface for the 'Schedules' data
 */
export interface SchedulesEntity {
  id: string; // Primary ID
  date: Date,
  tutor: string,
  place: string,
  type: string,
  subject: string,
  groupId: string
}
