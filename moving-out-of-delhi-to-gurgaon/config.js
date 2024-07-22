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
    subtitle: 'The rise of <span class="highlight-red">Gurgaon</span> at the outskirts of <span class="highlight">Delhi</span>',
    byline: 'By Surbhi Bhatia',
    date: 'July 21, 2024',
    image: "./india_map_inset_expand.png", 
//     footer: `
//     <div>
//      </p>
//         <p>Source: source citations, etc. Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.</p>
//         <p>surbhibhatia1906[at]gmail[com]</a></p>
//         <p>
//             <a href="https://x.com/surbhaai" target="_blank" class="social-icon">
//                 <i class="fab fa-twitter"></i>
//             </a>
//             <a href="https://github.com/surbhi-bh" target="_blank" class="social-icon">
//                 <i class="fab fa-github"></i>
//             </a> 
//     </div>
// `,
    chapters: [
        {
            id: 'starter',
            alignment: 'left',
            hidden: false,
            //title: 'Display Title',
            //image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
            description: 'In <span class="highlight">Delhi</span>, India&apos;s capital city and the political heart of the nation, government offices and housing hold prime real estate.',
            location: {
                center: [77.1484, 28.5293],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'starter',
                opacity: 1,
                duration: 500
            },
            {
                layer: 'delhi_L1',
                opacity: 0,
                duration: 500
            },
        ],
            onChapterExit: [
            {
                layer: 'starter',
                opacity: 0,
            },
            {
                layer: 'yellowline-first',
                opacity: 0,
            }
        ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            //title: 'Display Title',
            //image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
            description: 'Thirty kilometers southwest of <span class="highlight">Delhi</span> on the Haryana border,<span class="highlight-red">Gurgaon</span> has fast emerged as a bustling <a href="https://en.wikipedia.org/wiki/Edge_city">edge city</a> with skyscrapers, corporate offices, IT parks, and shopping malls. <br><br> Once just barren agricultural land,<span class="highlight-red">Gurgaon</span> is now a city developed entirely by private companies to cater to the country&apos;s growing professional class.',

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
                    duration: 50
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
                    opacity: 0
                },
                //  {
                //     layer: 'delhi-ncr',
                //     opacity: 0,
                //     duration: 0
                // },
                {
                    layer: 'yellowline-allstations-correct',
                    opacity: 0,
                    duration: 0
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
                }
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
            description: 'Among the many pull factors that lured corporate workforce to Gurgaon was improved connectivity.',
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
                    layer: 'delhi_L1',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'yellowline-first',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [    {
                layer: 'delhi_L1',
                opacity: 0.1,
                duration: 500
            },
            {
                layer: 'delhi-ncr-gurgaon-highlight',
                opacity: 0.1,
                duration: 500
            }
        ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 5',
            //image: './path/to/image/source.png',
            description: 'The <span class="highlight-yellow">Yellow Line Metro</span>, which started in 2004 from the heart of Delhi, provided direct transport beyond city limits. <br><br> The Qutub Minar - Millennium City Centre Gurgaon corridor on this line was inaugurated in 2010.',
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
                    layer: 'delhi_L1',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'yellowline-allstations-correct',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'rapid-line',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'rapid-icon',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'yellowline-line',
                    opacity: 1
                }
            ],
            onChapterExit: [   
                {
                layer: 'proposed-line',
                opacity: 0,
                duration: 500
            },
            {
                layer: 'prop-points-csv',
                opacity: 0
            }
        ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 6',
            description: 'A tiny <span class="highlight-blue">rapid metro</span>, connecting commerical areas within Gurgaon, appeared soon after. <br> <br> With trains, came the builders. Stations on this line were named after DLF, Vodafone, Raheja, Tata, Micromax and Reliance, who were all building townships to urbanise Gurgaon.',
            image: 'metronames.png',
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
                    layer: 'delhi_L1',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'rapid-line',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'rapid-icon',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'proposed-line',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'prop-points-csv',
                    opacity: 0
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
            description: 'The city is now getting its own metro. In June 2023, a plan for building a <span class="highlight-purple">28.5 km metro corridor</span> starting from Millennium City Centre Gurgaon was approved for better connectivity within the city.',
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
                    layer: 'delhi_L1',
                    opacity: 0.1,
                    duration: 500
                },
                {
                    layer: 'delhi-ncr-gurgaon-highlight',
                    opacity: 0.1,
                    duration: 500
                },
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
            description: '<span class="year-text">Year: 2000</span> <br> <br> Twenty years ago, Gurgaon barely existed, with only a few <span class="highlight-grey">buildings</span> at the Delhi-Haryana border.',
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
                    opacity: 0.1
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
            description: '<span class="year-text">Year: 2022</span> <br> <br> Since then, a surge in demand for office spaces, commercial and residential <span class="highlight-grey">buildings</span> has led to a booming cityscape.',
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
                    opacity: 0.1
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
            },
            {
                layer: 'lulc2020',
                opacity: 0.4, // Adjust opacity as needed to ensure visibility of both layers
                duration: 500
            }
        ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 9',
            image: 'dlf-chart.png',
            description: 'This growth is largely driven by private builders like <span class="highlight-lightblue">Delhi Land and Finance (DLF)</span>, which acquired land to build DLF City in Gurgaon, and now secured licenses to expand into New Gurgaon. <br><br> For the upper middle class of Delhi, this expansion continues to promise proximity to offices and access to modern housing and amenities.',
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
                    opacity: 0.4, // Adjust opacity as needed to ensure visibility of both layers
                    duration: 500
                },
                {
                    layer: 'delhi_L1',
                    opacity: 0.1
                }
            ]
        }
    ]
};
