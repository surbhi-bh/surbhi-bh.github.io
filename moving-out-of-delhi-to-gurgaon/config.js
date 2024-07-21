var config = {
    style: 'mapbox://styles/surbhibh/clyt720rv005c01nx5o36dwws',
    accessToken: 'pk.eyJ1Ijoic3VyYmhpYmgiLCJhIjoiY2tvcmE1cGUwMGZhZTJ2bW1rZXZzNXBkayJ9.rWycdGgLT9nZB5IPJtm1Ng',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Making of an edge city',
    subtitle: 'Residents of <span class="highlight">Delhi</span> are moving out to <span class="highlight-red">Gurgaon</span>',
    byline: 'By Surbhi Bhatia',
    image: "/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/india_map_inset_expand.png", // Replace with the actual path to your image
    footer: `
    <div>
     </p>
        <p>Source: source citations, etc. Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.</p>
        <p>surbhibhatia1906[at]gmail[com]</a></p>
        <p>
            <a href="https://x.com/surbhaai" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/surbhi-bh" target="_blank" class="social-icon">
                <i class="fab fa-github"></i>
            </a> 
    </div>
`,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            //title: 'Display Title',
            //image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.1484, 28.5293],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delhi_L1',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'delhi-ncr',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'proposed-line',
                    opacity: 0
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 1,
                    duration: 500
                },
            ],
            onChapterExit: [
                {
                    layer: 'delhi_L1',
                    opacity: 1
                },
                 {
                    layer: 'delhi-ncr',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'yellowline-allstations-correct',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'yellowline-line',
                    opacity: 0
                },
                {
                    layer: 'rapid-line',
                    opacity: 0
                },
                {
                    layer: 'rapid-icon',
                    opacity: 0
                },
                {
                    layer: 'lulc2000',
                    opacity: 0
                },
                {
                    layer: 'lulc2020',
                    opacity: 0
                },
                {
                    layer: 'proposed-line',
                    opacity: 0
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0,
                    duration: 500
                },
                // {
                //     layer: 'delhi-ncr',
                //     opacity: 0,
                //     duration: 500
                // },
                // {
                //     layer: 'delhi-ncr-gurgaon-highlight',
                //     opacity: 0,
                //     duration: 500
                // }
            ]
        },
        // {
        //     id: 'second-identifier',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: 'Chapter 2',
        //     //image: './path/to/image/source.png',
        //     description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
        //     location: {
        //         center: [77.1484, 28.5293],
        //         zoom: 7.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'jumpTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'delhi-ncr-gurgaon-highlight',
        //             opacity: 1,
        //             duration: 500
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'delhi-ncr',
        //             opacity: 0
        //         },
        //     ]
        // },
        // {
        //     id: 'third-identifier',
        //     alignment: 'left',
        //     hidden: false,
        //     //title: '',
        //     //image: './path/to/image/source.png',
        //     description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
        //     location: {
        //         center: [77.1484, 28.5293],
        //         zoom: 7.5,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'jumpTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'yellowline-first',
        //             opacity: 1,
        //             duration: 500
        //         },
        //         {
        //             layer: 'yellowline-allstations',
        //             opacity: 0,
        //             duration: 500
        //         }
        //     ],
        //     onChapterExit: []
        // },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            //title: '',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'delhi_L1',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'yellowline-first',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 5',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'yellowline-allstations-correct',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'yellowline-line',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 6',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rapid-line',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'rapid-icon',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 7',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'proposed-line',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'prop-points-csv',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 8',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'lulc2000',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'delhi_L1',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'eighth-mid-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 8-mid',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.0266, 28.4595],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'lulc2020',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'delhi_L1',
                    opacity: 0
                }
            ],
            onChapterExit: [ 
            {
                layer: 'lulc2000',
                opacity: 0
            },
            {
                layer: 'lulc2020',
                opacity: 0
            }
        ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 9',
            //image: './path/to/image/source.png',
            description: 'This is some text. This is some text. This is some text. This is some text. This is some text.',
            location: {
                center: [77.1007, 28.4650],
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dlf-layer',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'lulc2020',
                    opacity: 0.4, // Adjust opacity as needed to ensure visibility of both layers
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'dlf-layer',
                    opacity: 0
                },
                {
                    layer: 'lulc2020',
                    opacity: 0
                }
            ]
        }
    ]
};

// var config = {
//     style: 'mapbox://styles/surbhibh/clyt720rv005c01nx5o36dwws', 
//     accessToken: 'pk.eyJ1Ijoic3VyYmhpYmgiLCJhIjoiY2tvcmE1cGUwMGZhZTJ2bW1rZXZzNXBkayJ9.rWycdGgLT9nZB5IPJtm1Ng',
//     showMarkers: false,
//     markerColor: '#3FB1CE',
//     inset: false,
//     theme: 'dark',
//     use3dTerrain: false,
//     auto: false,
//     title: 'Delhi moves out to Gurgaon -- the edge city',
//     subtitle: 'Do you have a subway station nearby?',
//     byline: 'By xxxx',
//     footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
//     chapters: [
//         {
//             id: 'slug-style-id',
//             alignment: 'left',
//             hidden: false,
//             title: 'Display Title',
//             image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
//             description: 'Lorem ipsum dolor sit amet...',
//             location: {
//                 center: [77.1484, 28.5293],
//                 zoom: 7.5,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi-ncr',
//                     opacity: 0.8,
//                     duration: 500
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 1
//                 }
//             ]
//         },
//         {
//             id: 'second-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 2',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.1484, 28.5293],
//                 zoom: 7.5,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'jumpTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 1,
//                     duration: 500
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'delhi-ncr',
//                     opacity: 0
//                 }
//             ]
//         },
//         {
//             id: 'third-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 3',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.1484, 28.5293],
//                 zoom: 7.5,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'jumpTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'yellowline-first',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-allstations',
//                     opacity: 0,
//                     duration: 500
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 1
//                 },
//                 {
//                     layer: 'yellowline-first',
//                     opacity: 0
//                 }
//             ]
//         },
//         {
//             id: 'fourth-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 4',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-first',
//                     opacity: 1,
//                     duration: 5000
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'yellowline-first',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0.3
//                 }
//             ]
//         },
//         {
//             id: 'fifth-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 5',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-allstations-correct',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-line',
//                     opacity: 1
//                 }
//             ],
//             onChapterExit: [
//                 // {
//                 //     layer: 'yellowline-allstations-correct',
//                 //     opacity: 0
//                 // },
//                 // {
//                 //     layer: 'yellowline-line',
//                 //     opacity: 0
//                 // },
//                 // {
//                 //     layer: 'delhi-ncr-gurgaon-highlight',
//                 //     opacity: 0.2,
//                 //     duration: 500
//                 // }
//             ]
//         },
//         {
//             id: 'sixth-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 6',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-allstations-correct',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-line',
//                     opacity: 1
//                 },
//                 {
//                     layer: 'rapid-line',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'rapid-icon',
//                     opacity: 1,
//                     duration: 500
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'yellowline-allstations-correct',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'yellowline-line',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'rapid-line',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'rapid-icon',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.2,
//                     duration: 500
//                 }
//             ]
//         },
//         {
//             id: 'sixth-mid-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 6-mid',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0.3,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-allstations-correct',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'yellowline-line',
//                     opacity: 1
//                 },
//                 {
//                     layer: 'proposed-line',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'proposed-points',
//                     opacity: 1
//                 },
//                 {
//                     layer: 'rapid-line',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'rapid-icon',
//                     opacity: 1,
//                     duration: 500
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'yellowline-allstations-correct',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'yellowline-line',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'rapid-line',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'rapid-icon',
//                     opacity: 0
//                 },
//                 {
//                     layer: 'proposed-line',
//                     opacity: 0,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi-ncr-gurgaon-highlight',
//                     opacity: 0.2,
//                     duration: 500
//                 }
//             ]
//         },
//         {
//             id: 'seventh-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 7',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'lulc2000',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'lulc2000',
//                     opacity: 0
//                 }
//             ]
//         },
//         {
//             id: 'eighth-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 8',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch: 0,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'lulc2020',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'lulc2020',
//                     opacity: 0.2
//                 },
//                 {
//                     layer: 'dlf-layer',
//                     opacity: 1
//                 }
//             ]
//         },
//         {
//             id: 'eighth-mid-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 8-mid',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.0266, 28.4595],
//                 zoom: 9,
//                 pitch:45,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'lulc2020',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'delhi_L1',
//                     opacity: 0
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'lulc2020',
//                     opacity: 0.2
//                 },
//                 {
//                     layer: 'dlf-layer',
//                     opacity: 1
//                 }
//             ]
//         },
//         {
//             id: 'ninth-identifier',
//             alignment: 'left',
//             hidden: false,
//             title: 'Chapter 9',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [77.1007, 28.4650],
//                 zoom: 10,
//                 pitch: 45,
//                 bearing: 0
//             },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//                 {
//                     layer: 'dlf-layer',
//                     opacity: 1,
//                     duration: 500
//                 },
//                 {
//                     layer: 'lulc2020',
//                     opacity: 0
//                 }
//             ],
//             onChapterExit: []
//         }
//     ]
// };

