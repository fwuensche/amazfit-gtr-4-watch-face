/*
 ** Watch_Face_Editor tool
 ** watchface js version v2.1.1
 ** Copyright © SashaCX75. All Rights Reserved
 */

try {
  (() => {
    //start of ignored block
    const __$$app$$__ = __$$hmAppManager$$__.currentApp;
    function getApp() {
      return __$$app$$__.app;
    }
    function getCurrentPage() {
      return __$$app$$__.current && __$$app$$__.current.module;
    }
    const __$$module$$__ = __$$app$$__.current;
    const h = new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__)
    );
    const { px } = __$$app$$__.__globals__;
    const logger = Logger.getLogger("watchface_SashaCX75");
    //end of ignored block

    //dynamic modify start

    let normal_background_bg_img = "";
    let normal_temperature_high_text_img = "";
    let normal_temperature_low_text_img = "";
    let normal_temperature_current_text_img = "";
    let normal_weather_image_progress_img_level = "";
    let normal_digital_clock_img_time = "";
    let normal_digital_clock_hour_separator_img = "";
    let normal_heart_rate_image_progress_img_level = "";
    let normal_heart_rate_text_text_img = "";
    let normal_heart_rate_text_separator_img = "";
    let normal_date_img_date_day = "";
    let normal_date_img_date_month = "";
    let normal_system_disconnect_img = "";
    let normal_system_lock_img = "";
    let normal_system_clock_img = "";
    let normal_date_img_date_week_img = "";
    let normal_calories_image_progress_img_level = "";
    let normal_calories_text_text_img = "";
    let normal_battery_text_separator_img = "";
    let normal_sun_high_text_img = "";
    let normal_sun_high_separator_img = "";
    let normal_sun_low_text_img = "";
    let normal_sun_low_separator_img = "";
    let normal_sun_pointer_progress_img_pointer = "";
    let normal_distance_text_text_img = "";
    let normal_distance_text_separator_img = "";
    let normal_step_image_progress_img_level = "";
    let normal_step_current_text_img = "";
    let normal_step_current_separator_img = "";
    let normal_analog_clock_time_pointer_second = "";
    let idle_digital_clock_img_time = "";
    let idle_digital_clock_hour_separator_img = "";
    let Button_1 = "";
    let Button_2 = "";
    let Button_3 = "";
    let Button_4 = "";
    let Button_5 = "";
    let Button_6 = "";
    let Button_7 = "";
    let Button_8 = "";

    //dynamic modify end

    __$$module$$__.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        //dynamic modify start

        console.log("Watch_Face.ScreenNormal");
        normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 466,
          h: 466,
          src: "2.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_temperature_high_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 260,
            y: 388,
            font_array: [
              "3.png",
              "4.png",
              "5.png",
              "6.png",
              "7.png",
              "8.png",
              "9.png",
              "10.png",
              "11.png",
              "12.png",
            ],
            padding: false,
            h_space: 0,
            unit_sc: "15.png",
            unit_tc: "15.png",
            unit_en: "15.png",
            negative_image: "14.png",
            invalid_image: "13.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.WEATHER_HIGH,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_temperature_low_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 155,
            y: 388,
            font_array: [
              "3.png",
              "4.png",
              "5.png",
              "6.png",
              "7.png",
              "8.png",
              "9.png",
              "10.png",
              "11.png",
              "12.png",
            ],
            padding: false,
            h_space: 0,
            unit_sc: "18.png",
            unit_tc: "18.png",
            unit_en: "18.png",
            negative_image: "17.png",
            invalid_image: "16.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.WEATHER_LOW,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_temperature_current_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 208,
            y: 420,
            font_array: [
              "3.png",
              "4.png",
              "5.png",
              "6.png",
              "7.png",
              "8.png",
              "9.png",
              "10.png",
              "11.png",
              "12.png",
            ],
            padding: false,
            h_space: 0,
            unit_sc: "18.png",
            unit_tc: "18.png",
            unit_en: "18.png",
            negative_image: "17.png",
            invalid_image: "16.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.WEATHER_CURRENT,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_weather_image_progress_img_level = hmUI.createWidget(
          hmUI.widget.IMG_LEVEL,
          {
            x: 217,
            y: 380,
            image_array: [
              "w_01.png",
              "w_02.png",
              "w_03.png",
              "w_04.png",
              "w_05.png",
              "w_06.png",
              "w_07.png",
              "w_08.png",
              "w_09.png",
              "w_10.png",
              "w_11.png",
              "w_12.png",
              "w_13.png",
              "w_14.png",
              "w_15.png",
              "w_16.png",
              "w_17.png",
              "w_18.png",
              "w_19.png",
              "w_20.png",
              "w_21.png",
              "w_22.png",
              "w_23.png",
              "w_24.png",
              "w_25.png",
              "w_26.png",
              "w_27.png",
              "w_28.png",
              "w_29.png",
            ],
            image_length: 29,
            type: hmUI.data_type.WEATHER_CURRENT,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_digital_clock_img_time = hmUI.createWidget(
          hmUI.widget.IMG_TIME,
          {
            hour_startX: 76,
            hour_startY: 192,
            hour_array: [
              "20.png",
              "21.png",
              "22.png",
              "23.png",
              "24.png",
              "25.png",
              "26.png",
              "27.png",
              "28.png",
              "29.png",
            ],
            hour_zero: 1,
            hour_space: 3,
            hour_angle: 0,
            hour_align: hmUI.align.LEFT,

            minute_startX: 258,
            minute_startY: 192,
            minute_array: [
              "20.png",
              "21.png",
              "22.png",
              "23.png",
              "24.png",
              "25.png",
              "26.png",
              "27.png",
              "28.png",
              "29.png",
            ],
            minute_zero: 1,
            minute_space: 3,
            minute_angle: 0,
            minute_follow: 0,
            minute_align: hmUI.align.LEFT,

            second_startX: 399,
            second_startY: 222,
            second_array: [
              "30.png",
              "31.png",
              "32.png",
              "33.png",
              "34.png",
              "35.png",
              "36.png",
              "37.png",
              "38.png",
              "39.png",
            ],
            second_zero: 1,
            second_space: 1,
            second_angle: 0,
            second_follow: 0,
            second_align: hmUI.align.LEFT,

            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_digital_clock_hour_separator_img = hmUI.createWidget(
          hmUI.widget.IMG,
          {
            x: 212,
            y: 203,
            src: "40.png",
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_heart_rate_image_progress_img_level = hmUI.createWidget(
          hmUI.widget.IMG_LEVEL,
          {
            x: 286,
            y: 70,
            image_array: [
              "41.png",
              "42.png",
              "43.png",
              "44.png",
              "45.png",
              "46.png",
            ],
            image_length: 6,
            type: hmUI.data_type.HEART,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_heart_rate_text_separator_img = hmUI.createWidget(
          hmUI.widget.IMG,
          {
            x: 299,
            y: 151,
            src: "59.png",
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
          day_startX: 160,
          day_startY: 304,
          day_sc_array: [
            "70.png",
            "71.png",
            "72.png",
            "73.png",
            "74.png",
            "75.png",
            "76.png",
            "77.png",
            "78.png",
            "79.png",
          ],
          day_tc_array: [
            "70.png",
            "71.png",
            "72.png",
            "73.png",
            "74.png",
            "75.png",
            "76.png",
            "77.png",
            "78.png",
            "79.png",
          ],
          day_en_array: [
            "70.png",
            "71.png",
            "72.png",
            "73.png",
            "74.png",
            "75.png",
            "76.png",
            "77.png",
            "78.png",
            "79.png",
          ],
          day_zero: 1,
          day_space: 3,
          day_unit_sc: "80.png",
          day_unit_tc: "80.png",
          day_unit_en: "80.png",
          day_align: hmUI.align.LEFT,
          day_is_character: false,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
          month_startX: 250,
          month_startY: 304,
          month_sc_array: [
            "60.png",
            "61.png",
            "62.png",
            "63.png",
            "64.png",
            "65.png",
            "66.png",
            "67.png",
            "68.png",
            "69.png",
          ],
          month_tc_array: [
            "60.png",
            "61.png",
            "62.png",
            "63.png",
            "64.png",
            "65.png",
            "66.png",
            "67.png",
            "68.png",
            "69.png",
          ],
          month_en_array: [
            "60.png",
            "61.png",
            "62.png",
            "63.png",
            "64.png",
            "65.png",
            "66.png",
            "67.png",
            "68.png",
            "69.png",
          ],
          month_zero: 1,
          month_space: 3,
          month_align: hmUI.align.LEFT,
          month_is_character: false,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_system_disconnect_img = hmUI.createWidget(
          hmUI.widget.IMG_STATUS,
          {
            x: 41,
            y: 262,
            src: "81.png",
            type: hmUI.system_status.DISCONNECT,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_system_lock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 41,
          y: 182,
          src: "82.png",
          type: hmUI.system_status.LOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 39,
          y: 223,
          src: "83.png",
          type: hmUI.system_status.CLOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_date_img_date_week_img = hmUI.createWidget(
          hmUI.widget.IMG_WEEK,
          {
            x: 164,
            y: 356,
            week_en: [
              "84.png",
              "85.png",
              "86.png",
              "87.png",
              "88.png",
              "89.png",
              "90.png",
            ],
            week_tc: [
              "84.png",
              "85.png",
              "86.png",
              "87.png",
              "88.png",
              "89.png",
              "90.png",
            ],
            week_sc: [
              "84.png",
              "85.png",
              "86.png",
              "87.png",
              "88.png",
              "89.png",
              "90.png",
            ],
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_calories_image_progress_img_level = hmUI.createWidget(
          hmUI.widget.IMG_LEVEL,
          {
            x: 183,
            y: 29,
            image_array: [
              "91.png",
              "92.png",
              "93.png",
              "94.png",
              "95.png",
              "96.png",
              "97.png",
            ],
            image_length: 7,
            type: hmUI.data_type.CAL,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        // COUNTERS: STEPS, CALORIES, HEART RATE (in this order)

        normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 90,
          y: 110,
          font_array: [
            "107.png",
            "108.png",
            "109.png",
            "110.png",
            "111.png",
            "112.png",
            "113.png",
            "114.png",
            "115.png",
            "116.png",
          ],
          padding: false,
          h_space: 3,
          align_h: hmUI.align.CENTER_H,
          type: hmUI.data_type.STEP,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_calories_text_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 203,
            y: 64,
            font_array: [
              "107.png",
              "108.png",
              "109.png",
              "110.png",
              "111.png",
              "112.png",
              "113.png",
              "114.png",
              "115.png",
              "116.png",
            ],
            padding: false,
            h_space: 1,
            invalid_image: "98.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.CAL,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_heart_rate_text_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 316,
            y: 110,
            font_array: [
              "107.png",
              "108.png",
              "109.png",
              "110.png",
              "111.png",
              "112.png",
              "113.png",
              "114.png",
              "115.png",
              "116.png",
            ],
            padding: false,
            h_space: 1,
            invalid_image: "58.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.HEART,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        // SEPARATORS (TODO: understand what it is and rename things accordingly)

        normal_battery_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 197,
          y: 111,
          src: "99.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 84,
          y: 339,
          font_array: [
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
          ],
          padding: true,
          h_space: 0,
          invalid_image: "100.png",
          dot_image: "101.png",
          align_h: hmUI.align.LEFT,
          type: hmUI.data_type.SUN_RISE,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_high_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 102,
          y: 309,
          src: "102.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 323,
          y: 339,
          font_array: [
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
          ],
          padding: false,
          h_space: 0,
          invalid_image: "103.png",
          dot_image: "104.png",
          align_h: hmUI.align.LEFT,
          type: hmUI.data_type.SUN_SET,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_low_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 343,
          y: 309,
          src: "105.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_pointer_progress_img_pointer = hmUI.createWidget(
          hmUI.widget.IMG_POINTER,
          {
            src: "106.png",
            center_x: 233,
            center_y: 233,
            x: 20,
            y: 233,
            start_angle: 240,
            end_angle: 120,
            invalid_visible: false,
            type: hmUI.data_type.SUN_CURRENT,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_distance_text_text_img = hmUI.createWidget(
          hmUI.widget.TEXT_IMG,
          {
            x: 195,
            y: 163,
            font_array: [
              "107.png",
              "108.png",
              "109.png",
              "110.png",
              "111.png",
              "112.png",
              "113.png",
              "114.png",
              "115.png",
              "116.png",
            ],
            padding: false,
            h_space: 3,
            dot_image: "117.png",
            align_h: hmUI.align.CENTER_H,
            type: hmUI.data_type.DISTANCE,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_distance_text_separator_img = hmUI.createWidget(
          hmUI.widget.IMG,
          {
            x: 220,
            y: 134,
            src: "118.png",
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_step_image_progress_img_level = hmUI.createWidget(
          hmUI.widget.IMG_LEVEL,
          {
            x: 79,
            y: 70,
            image_array: [
              "119.png",
              "120.png",
              "121.png",
              "122.png",
              "123.png",
              "124.png",
            ],
            image_length: 6,
            type: hmUI.data_type.STEP,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        normal_step_current_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 92,
          y: 151,
          src: "125.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_analog_clock_time_pointer_second = hmUI.createWidget(
          hmUI.widget.TIME_POINTER,
          {
            second_path: "126.png",
            second_centerX: 233,
            second_centerY: 233,
            second_posX: 13,
            second_posY: 233,
            show_level: hmUI.show_level.ONLY_NORMAL,
          }
        );

        console.log("Watch_Face.ScreenAOD");

        idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
          hour_startX: 76,
          hour_startY: 192,
          hour_array: [
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
          ],
          hour_zero: 1,
          hour_space: 3,
          hour_angle: 0,
          hour_align: hmUI.align.LEFT,

          minute_startX: 258,
          minute_startY: 192,
          minute_array: [
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
          ],
          minute_zero: 1,
          minute_space: 3,
          minute_angle: 0,
          minute_follow: 0,
          minute_align: hmUI.align.LEFT,

          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_digital_clock_hour_separator_img = hmUI.createWidget(
          hmUI.widget.IMG,
          {
            x: 212,
            y: 203,
            src: "127.png",
            show_level: hmUI.show_level.ONLY_AOD,
          }
        );

        console.log("user_script_beforeShortcuts.js");
        // start user_script_beforeShortcuts.js

        // vibrate function

        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
        let timer_StopVibrate = null;

        function vibro(scene = 25) {
          let stopDelay = 50;
          stopVibro();
          vibrate.stop();
          vibrate.scene = scene;
          if (scene < 23 || scene > 25) stopDelay = 1300;
          vibrate.start();
          if (scene != 1)
            timer_StopVibrate = timer.createTimer(
              stopDelay,
              3000,
              stopVibro,
              {}
            );
        }

        function stopVibro() {
          vibrate.stop();
          if (timer_StopVibrate) timer.stopTimer(timer_StopVibrate);
        }

        // end vibrate function

        // end user_script_beforeShortcuts.js

        console.log("Watch_Face.Buttons");
        Button_1 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 321,
          y: 303,
          w: 70,
          h: 69,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "TideScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_2 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 79,
          y: 69,
          w: 99,
          h: 97,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "activityAppScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_3 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 83,
          y: 303,
          w: 67,
          h: 69,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "TideScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_4 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 287,
          y: 69,
          w: 99,
          h: 97,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "heart_app_Screen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_5 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 393,
          y: 192,
          w: 52,
          h: 86,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "AlarmInfoScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_6 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 160,
          y: 382,
          w: 148,
          h: 58,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "WeatherScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_7 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 161,
          y: 303,
          w: 147,
          h: 69,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({ url: "ScheduleCalScreen", native: true });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        Button_8 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 183,
          y: 28,
          w: 100,
          h: 82,
          text: "",
          color: 0xffff8c00,
          text_size: 25,
          press_src: "0_Empty.png",
          normal_src: "0_Empty.png",
          click_func: (button_widget) => {
            hmApp.startApp({
              url: "Settings_batteryManagerScreen",
              native: true,
            });
            vibro(25);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        //dynamic modify end
      },
      onInit() {
        logger.log("index page.js on init invoke");
      },
      build() {
        this.init_view();
        logger.log("index page.js on ready invoke");
      },
      onDestroy() {
        logger.log("index page.js on destroy invoke");
      },
    });
  })();
} catch (e) {
  console.log("Mini Program Error", e);
  e &&
    e.stack &&
    e.stack.split(/\n/).forEach((i) => console.log("error stack", i));
}
