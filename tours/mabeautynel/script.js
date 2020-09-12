TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A",
  "hfovMin": 95,
  "hfovMax": 120,
  "class": "Panorama",
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 85.9,
        "hfov": 9.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 194,
           "width": 192,
           "class": "ImageResourceLevel",
           "url": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -30.81
       }
      ],
      "id": "overlay_7F1A4A42_72C6_0224_41CA_461C22A85D23",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B, this.camera_8D4ADEEA_828B_7D4F_41B7_AF11F3F45341); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "width": 96,
           "class": "ImageResourceLevel",
           "url": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 85.9,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.81
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "label": "IMG_20200902_213419_00_165",
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "backwardYaw": -83.24,
    "panorama": {
     "id": "panorama_7B8D353E_72BE_065C_41C8_35E182F7945B",
     "hfovMin": 60,
     "hfovMax": 120,
     "class": "Panorama",
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -83.24,
           "hfov": 9.23,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 194,
              "width": 193,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -36.14
          }
         ],
         "id": "overlay_7C5F9279_72C2_02E4_41D7_7A2E934B9676",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A, this.camera_92ABDF39_828B_7CCD_41CE_EF2503534534); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 9.23,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 96,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -83.24,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -36.14
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 5.9,
           "hfov": 9.41,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 194,
              "width": 193,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -34.62
          }
         ],
         "id": "overlay_7C0866C2_72C2_0224_41D7_6CE39843764A",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2, this.camera_8D501F22_828B_7CFF_41C9_4E5E1183A9D0); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 9.41,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 96,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 5.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -34.62
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 72.95,
           "hfov": 10.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 194,
              "width": 193,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_2_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -25.1
          }
         ],
         "id": "overlay_7C15B9E7_72CE_01EC_41D5_9E227528487F",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5, this.camera_92A73F51_828B_7B5D_41DF_968D880CAD27); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 10.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 96,
              "class": "ImageResourceLevel",
              "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": 72.95,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -25.1
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "label": "IMG_20200902_213506_00_166",
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "backwardYaw": 155.24,
       "panorama": {
        "id": "panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2",
        "hfovMin": 60,
        "hfovMax": 120,
        "class": "Panorama",
        "pitch": 0,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 155.24,
              "hfov": 7.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "width": 192,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -49.46
             }
            ],
            "id": "overlay_7C63DD9D_72C2_065C_41D3_D8DDD29BFB15",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B, this.camera_8D72EED3_828B_7D5D_41DE_1E5830233E36); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 7.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "width": 96,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": 155.24,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -49.46
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "label": "IMG_20200902_213557_00_167",
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "backwardYaw": 5.9,
          "panorama": "this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B",
          "yaw": 155.24,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_t.jpg",
        "hfov": 360
       },
       "yaw": 5.9,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": 85.9,
       "panorama": "this.panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A",
       "yaw": -83.24,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": -88.19,
       "panorama": {
        "id": "panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
        "hfovMin": 60,
        "hfovMax": 120,
        "class": "Panorama",
        "pitch": 0,
        "frames": [
         {
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -88.19,
              "hfov": 10.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "width": 193,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -27
             }
            ],
            "id": "overlay_7DD8D654_72CE_022C_41BC_8FFA75EA8FF8",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B, this.camera_929F3F99_828B_7BCD_4192_8FA6DCCE1D87); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "width": 96,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -88.19,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -27
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -155.62,
              "hfov": 10.73,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "width": 193,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_1_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -20.14
             }
            ],
            "id": "overlay_7DDD413B_72CE_1E64_41C4_3466B4B75A8A",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD, this.camera_92C9DFC7_828B_7B45_41C5_41C5189B5FF4); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.73,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "width": 96,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -155.62,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.14
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 177.33,
              "hfov": 9.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "width": 192,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_2_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -30.41
             }
            ],
            "id": "overlay_62CA5D26_72CE_066C_41DA_C8929F0F8307",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0, this.camera_92EC4FAB_828B_7BCC_41D4_9F224AAC2915); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 9.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "width": 96,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": 177.33,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -30.41
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 128.95,
              "hfov": 10.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "width": 193,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_3_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -22.43
             }
            ],
            "id": "overlay_7C2CFB8C_72C2_023C_41AE_36C42C23242A",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2, this.camera_92FB7FB9_828B_7BCD_41D7_BBE7057BA0F3); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "width": 96,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "yaw": 128.95,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -22.43
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "label": "IMG_20200902_213647_00_168",
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "backwardYaw": 72.95,
          "panorama": "this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B",
          "yaw": -88.19,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": -23.05,
          "panorama": {
           "id": "panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0",
           "hfovMin": 60,
           "hfovMax": 120,
           "class": "Panorama",
           "pitch": 0,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -23.05,
                 "hfov": 7.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 194,
                    "width": 193,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -49.1
                }
               ],
               "id": "overlay_7D057490_72C2_0624_41CC_062EA7096FA4",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5, this.camera_92B5AF69_828B_7B4C_41D4_188C0C16E8E7); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 7.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "width": 96,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -23.05,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -49.1
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "label": "IMG_20200902_213750_00_170",
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "backwardYaw": 177.33,
             "panorama": "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
             "yaw": -23.05,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_t.jpg",
           "hfov": 360
          },
          "yaw": 177.33,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": -23.43,
          "panorama": {
           "id": "panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2",
           "hfovMin": 60,
           "hfovMax": 120,
           "class": "Panorama",
           "pitch": 0,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -23.43,
                 "hfov": 10.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 194,
                    "width": 193,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -28.52
                }
               ],
               "id": "overlay_7D60EC5D_72C2_06DC_4184_B72DBF5A7B60",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5, this.camera_92809F82_828B_7BBF_41D9_55CF43B72E49); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 10.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "width": 96,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -23.43,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -28.52
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "label": "IMG_20200902_213901_00_171",
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "backwardYaw": 128.95,
             "panorama": "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
             "yaw": -23.43,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_t.jpg",
           "hfov": 360
          },
          "yaw": 128.95,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": 32.95,
          "panorama": {
           "id": "panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD",
           "hfovMin": 60,
           "hfovMax": 120,
           "class": "Panorama",
           "pitch": 0,
           "frames": [
            {
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": 32.95,
                 "hfov": 8.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 194,
                    "width": 193,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -40.72
                }
               ],
               "id": "overlay_7D97D5A6_72C2_066C_41DB_3350340696C3",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5, this.camera_8D464F04_828B_7CBB_41D5_5CFD35DD9506); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 8.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "width": 96,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 32.95,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -40.72
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "label": "IMG_20200902_213719_00_169",
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "backwardYaw": -155.62,
             "panorama": "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
             "yaw": 32.95,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_t.jpg",
           "hfov": 360
          },
          "yaw": -155.62,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_t.jpg",
        "hfov": 360
       },
       "yaw": 72.95,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_t.jpg",
     "hfov": 360
    },
    "yaw": 85.9,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_t.jpg",
  "hfov": 360
 },
 {
  "buttonZoomIn": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "buttonRestart": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "buttonMoveUp": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "buttonPlayRight": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "buttonPause": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "toggle",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "buttonMoveRight": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "buttonMoveDown": {
   "id": "IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  },
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveLeft": {
   "id": "IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "mode": "push",
   "minHeight": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_pressed.png",
   "paddingBottom": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_rollover.png",
   "minWidth": 0,
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036.png",
   "cursor": "hand",
   "width": 40,
   "borderSize": 0,
   "height": 40,
   "class": "IconButton",
   "transparencyActive": true,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "paddingRight": 0
  }
 },
 {
  "id": "panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 85.9,
   "class": "PanoramaCameraPosition",
   "pitch": -17.05
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B",
 {
  "id": "panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -88.57,
   "class": "PanoramaCameraPosition",
   "pitch": -55.52
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -9.52,
   "class": "PanoramaCameraPosition",
   "pitch": -11.81
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 20.95,
   "class": "PanoramaCameraPosition",
   "pitch": -51.81
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8D5E12_72BE_0225_41DA_87325D3FE68A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8D353E_72BE_065C_41C8_35E182F7945B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8D18CB_72BE_0E24_41D3_748678AC1CB2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8D4FF3_72BE_01EB_41CA_552AF546A1E5_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8D06FB_72BE_03E4_41D1_D9055E89E2CD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_7B8BB1E7_72BE_01EC_41D4_9A0CCF464DE2_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "media": "this.panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_78FA4A5B_72BE_0224_41B3_F014CE3337D0_camera"
   }
  ]
 },
 {
  "id": "camera_8D72EED3_828B_7D5D_41DE_1E5830233E36",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -174.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_8D4ADEEA_828B_7D4F_41B7_AF11F3F45341",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 96.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_8D464F04_828B_7CBB_41D5_5CFD35DD9506",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 24.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_8D501F22_828B_7CFF_41C9_4E5E1183A9D0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -24.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_92ABDF39_828B_7CCD_41CE_EF2503534534",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -94.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92A73F51_828B_7B5D_41DF_968D880CAD27",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 91.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92B5AF69_828B_7B4C_41D4_188C0C16E8E7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -2.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92809F82_828B_7BBF_41D9_55CF43B72E49",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -51.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_929F3F99_828B_7BCD_4192_8FA6DCCE1D87",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -107.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92EC4FAB_828B_7BCC_41D4_9F224AAC2915",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 156.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92FB7FB9_828B_7BCD_41D7_BBE7057BA0F3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 156.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_92C9DFC7_828B_7B45_41C5_41C5189B5FF4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -147.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "audio": {
   "oggUrl": "media/audio_63B7AD79_72C6_06E4_41DC_A2ED0DBF193E.ogg",
   "mp3Url": "media/audio_63B7AD79_72C6_06E4_41DC_A2ED0DBF193E.mp3",
   "class": "AudioResource"
  },
  "id": "audio_63B7AD79_72C6_06E4_41DC_A2ED0DBF193E",
  "autoplay": true,
  "class": "MediaAudio"
 }
], "children": [
 {
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "shadow": false,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderSize": 2,
  "playbackBarProgressOpacity": 1,
  "paddingTop": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadHeight": 30,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeadBorderSize": 0,
  "width": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 10,
  "height": "100%",
  "progressOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarBottom": 10,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderColor": "#AAAAAA",
  "playbackBarOpacity": 1,
  "top": 0,
  "toolTipPaddingTop": 4,
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "borderRadius": 0,
  "progressBottom": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "minHeight": 50,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeight": 20,
  "progressBorderSize": 2,
  "toolTipBorderRadius": 3,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "minWidth": 100,
  "toolTipFontSize": 12,
  "playbackBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 4,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "playbackBarBorderColor": "#AAAAAA",
  "paddingLeft": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "left": 0,
  "paddingRight": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarProgressBorderColor": "#000000"
 },
 {
  "bottom": "0%",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "layout": "horizontal",
  "shadow": false,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "paddingTop": 0,
  "children": [
   {
    "id": "Container_52D2AE7F_5F01_65BC_4192_E5EA29912157",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "scrollBarWidth": 10,
    "minHeight": 20,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "children": [
     "this.IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
     "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
     "this.IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
     "this.IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
     {
      "id": "Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 0,
      "scrollBarWidth": 10,
      "minHeight": 20,
      "layout": "vertical",
      "scrollBarMargin": 2,
      "shadow": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "children": [
       "this.IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
       "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
       "this.IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4"
      ],
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "width": 40,
      "borderSize": 0,
      "height": "100%",
      "class": "Container",
      "scrollBarColor": "#000000",
      "verticalAlign": "middle",
      "contentOpaque": false,
      "paddingLeft": 0,
      "paddingRight": 0,
      "overflow": "hidden",
      "gap": 4
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
     "this.IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
     {
      "id": "IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "mode": "toggle",
      "minHeight": 0,
      "shadow": false,
      "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E_pressed.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "minWidth": 0,
      "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E.png",
      "cursor": "hand",
      "width": 40,
      "borderSize": 0,
      "height": 40,
      "class": "IconButton",
      "transparencyActive": true,
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "paddingRight": 0
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84"
    ],
    "minWidth": 392,
    "scrollBarOpacity": 0.5,
    "width": 392,
    "borderSize": 0,
    "height": "100%",
    "class": "Container",
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "contentOpaque": false,
    "paddingLeft": 0,
    "paddingRight": 0,
    "overflow": "hidden",
    "gap": 4
   }
  ],
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "width": "100%",
  "borderSize": 0,
  "height": 142,
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "middle",
  "contentOpaque": false,
  "class": "Container",
  "left": "0%",
  "paddingRight": 0,
  "overflow": "scroll",
  "gap": 10
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "minHeight": 20,
 "layout": "absolute",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "borderSize": 0,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "paddingRight": 0,
 "gap": 10,
 "vrPolyfillScale": 0.5
})