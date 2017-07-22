import { Component, OnInit } from '@angular/core';
import { Activity } from "./activity";
import { ActivityService } from "./activity.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styles: []
})
export class ActivitiesComponent implements OnInit {

  addingActivity = false;
  activities: any = [];
  selectedActivity: Activity;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    return this.activityService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }

  enableAddMode() {
    this.addingActivity = true;
    this.selectedActivity = new Activity();
  }

  onSelect(activity: Activity) {
    this.addingActivity = false;
    this.selectedActivity = activity;
  }

  cancel() {
    this.addingActivity = false;
    this.selectedActivity = null;
  }

  save() {
    // TODO:
  }

  deleteActivity(activity: Activity) {
    // TODO:
  }

}
