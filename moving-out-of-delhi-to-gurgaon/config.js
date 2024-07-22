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
            id: 'starter',
            alignment: 'left',
            hidden: false,
            //title: 'Display Title',
            //image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
            description: 'Known as <span class="highlight">Delhi&apos;s</span> satellite city, <span class="highlight-red">Gurgaon</span> is situated 30 km southwest of the national capital at the Haryana border. In the last decade, its population has almost doubled from 876,000 to 1.25 million people. <br><br> Once just barren land, <span class="highlight-red">Gurgaon</span> is now a bustling <a href="https://en.wikipedia.org/wiki/Edge_city">edge city</a> with skyscrapers, corporate offices, IT parks, and shopping malls.',
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
            }],
            onChapterExit: [
            {
                layer: 'starter',
                opacity: 0,
                duration: 500,
            },
            {
                layer: 'yellowline-first',
                opacity: 0,
                duration: 500
            }
        ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            //title: 'Display Title',
            //image: '/Users/surbhibhatia/Desktop/LEDE-PROJECT/projectTwo_Delhi/delhi_layer1.png',
            description: 'Known as <span class="highlight">Delhi&apos;s</span> satellite city, <span class="highlight-red">Gurgaon</span> is situated 30 km southwest of the national capital at the Haryana border. In the last decade, its population has almost doubled from 876,000 to 1.25 million people. <br><br> Once just barren land, <span class="highlight-red">Gurgaon</span> is now a bustling <a href="https://en.wikipedia.org/wiki/Edge_city">edge city</a> with skyscrapers, corporate offices, IT parks, and shopping malls.',
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
            description: 'A tiny <span class="highlight-blue">rapid metro</span>, connecting commerical areas within Gurgaon, appeared soon after. <br> <br> With trains, came the builders. Stations on this line got named after DLF, Vodafone, Raheja, Tata, Micromax and Reliance, who were all building townships to urbanise Gurgaon.',
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
            description: 'The city is now getting its own metro. In June 2023, a <span class="highlight-purple">28.5 km corridor</span> starting from Millennium City Centre Gurgaon was approved to improve connectivity within the city.',
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
            onChapterExit: [{
                layer: 'delhi_L1',
                opacity: 0
            }]
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 8',
            //image: './path/to/image/source.png',
            description: '<span class="year-text">Year: 2000</span> <br> <br> Twenty years ago, only a few <span class="highlight-grey">buildings</span> existed at the Delhi-Haryana border. The area was not so urbanised.',
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
            onChapterExit: [{
                layer: 'delhi_L1',
                opacity: 0
            }]
        },
        {
            id: 'eighth-mid-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Chapter 8-mid',
            //image: './path/to/image/source.png',
            description: '<span class="year-text">Year: 2022</span> <br> <br> Since then..',
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
            },
            {
                layer: 'delhi_L1',
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
            description: 'The growth is largely driven by private builders..  <span class="highlight-lightblue">DLF</span> - licenses. And what it means for the masses - jobs, homes,',
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
                },
                {
                    layer: 'delhi_L1',
                    opacity: 0
                }
            ]
        }
    ]
};
