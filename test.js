const tileCover = require('./index');

const getTiles = tileCover.tiles;
const polygon = {
    "type": "Polygon",
    "coordinates": [
        [
            [
                120.59181174831775,
                31.160981274685277
            ],
            [
                120.63249788586805,
                31.166122408789164
            ],
            [
                120.66477212156194,
                31.127924466967926
            ],
            [
                120.63095284266994,
                31.11484548252337
            ],
            [
                120.60451543683557,
                31.119548246262937
            ],
            [
                120.58460154672656,
                31.132773519938628
            ],
            [
                120.57550295900434,
                31.14305856931438
            ],
            [
                120.59181174831775,
                31.160981274685277
            ]
        ]
    ]
};

const limits = {
    min_zoom: 10,
    max_zoom: 10,
    tileSize: 512
}

const tiles= getTiles(polygon, limits);
console.log(tiles);

