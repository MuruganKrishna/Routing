import { Component, OnInit } from "@angular/core";
import { isNull } from "util";
import { AlertsService } from "angular-alert-module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];
  count1: number = 0;
  i: number = 1;
  count: number = 1;
  constructor(private alerts: AlertsService) {}

  ngOnInit() {}
  random() {
    console.log(Math.floor(Math.random() * 8 + 1));
  }
  disconnect(mgs: any) {
    console.log(mgs);
    this.array4[mgs] = undefined;
    console.log(this.array4);
  }

  connect(name: any) {
    let index = 0;
    let ind;
    let sflag = 0;
    this.count++;
    // console.log(this.count);
    if (
      this.array4[1] != undefined &&
      this.array4[2] != undefined &&
      this.array4[3] != undefined &&
      this.array4[4] != undefined &&
      this.array4[5] != undefined &&
      this.array4[6] != undefined
    ) {
      alert("routers are busy - error");
      console.log("alert");
    } else {
      index = Math.floor(Math.random() * 6 + 1);

      // for (this.i = 0; this.i < 2; this.i++) {
      //   if (this.array1[this.i] == undefined) {
      //     this.i--;
      //     if (this.array4[index] == undefined) {
      //       this.array4[index] = name;
      //       console.log(this.array1[this.i]);
      //       console.log("first");
      //       break;
      //     }
      //   }
      //   if (this.array2[this.i] == undefined) {
      //     this.i--;
      //     if (this.array4[index] == undefined) {
      //       this.array4[index] = name;
      //       console.log("if working");
      //       console.log(this.array2[this.i]);
      //       break;
      //     }
      //   }
      //   if (this.array3[this.i] == undefined) {
      //     this.i--;
      //     if (this.array4[index] == undefined) {
      //       this.array4[index] = name;
      //       break;
      //     }
      //   }

      // }
      for (ind = 1; ind < 7; ind++) {
        if (this.array4[ind] == name) {
          sflag = 1;
          break;
        }
      }
      // console.log(this.array1[0]);
      // if (sflag == 0) {
      //   this.array1[this.count1] = name;
      //   this.count1++;
      //   console.log(this.array1[this.count1]);
      // }
      if (sflag != 1) {
        for (this.i = 0; this.i < 15; this.i++) {
          if (this.array4[index] == undefined) {
            this.array4[index] = name;
            break;
          } else {
            index = Math.floor(Math.random() * 6 + 1);
          }
        }
      }
    }
  }
}
