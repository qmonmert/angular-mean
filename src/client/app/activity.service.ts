import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Activity } from "./activity";

const api = '/api';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) {}

  getActivities() {
    return this.http.get<Array<Activity>>(`${api}/activities`);
  }

  deleteActivity(activity: Activity) {
    return this.http.delete(`${api}/activity/${activity.id}`);
  }

  addActivity(activity: Activity) {
    return this.http.post<Activity>(`${api}/activity`, activity);
  }

  updateActivity(activity: Activity) {
    return this.http.put<Activity>(`${api}/activity/${activity.id}`, activity);
  }

}
