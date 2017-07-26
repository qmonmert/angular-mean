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
    if (this.addingActivity) {
      this.activityService.addActivity(this.selectedActivity).subscribe(activity => {
        this.addingActivity = false;
        this.selectedActivity = null;
        this.activities.push(activity);
      });
    } else {
      this.activityService.updateActivity(this.selectedActivity).subscribe(activity => {
        this.addingActivity = false;
        this.selectedActivity = null;
      });
    }
  }

  deleteActivity(activity: Activity) {
    this.activityService.deleteActivity(activity).subscribe(res => {
      this.activities = this.activities.filter(a => a !== activity);
      if (this.selectedActivity === activity) {
        this.selectedActivity = null;
      }
    });
  }

}
