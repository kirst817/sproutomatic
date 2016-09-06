
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('plants').insert({
          name: 'Basil',
          sunExposureMax: 400,
          sunExposureMin: 200,
          waterRequirementsMax: 750,
          waterRequirementsMin: 500,
          tempRangeMax: 50,
          tempRangeMin: 70,
          humidityMax: 60,
          humidityMin: 50
        }),
        knex('plants').insert({
          name: 'Celery',
          sunExposureMax: 500,
          sunExposureMin: 200,
          waterRequirementsMax: 750,
          waterRequirementsMin: 500,
          tempRangeMax: 80,
          tempRangeMin: 60,
          humidityMax: 60,
          humidityMin: 50
        }),
        knex('plants').insert({
          name: 'Chives',
          sunExposureMax: 500,
          sunExposureMin: 200,
          waterRequirementsMax: 750,
          waterRequirementsMin: 500,
          tempRangeMax: 80,
          tempRangeMin: 60,
          humidityMax: 60,
          humidityMin: 50
        })

      ]);

    });
};


//
      //sunExposure:
            // a)full sun = 300
            // b)part sun = 250
            // c)shade = 200
      //waterRequirements:
            // a)light= 1000 - 750
            // b)moderate = 750 - 500
            // c)heavy = 250 -500
            // d)too heavy = 100 - 250
      // tempRange:
            //a)warm season = 60° - 80° F.
            //b)cool-season =  50° - 70° F.
      // humidity:
            //a)high = 60 - 80
            //b)mild = 50 -60
            //c)low = 30 - 40
      // spacing:
            // a) small spacing =
            // b) moderate spacing =
            // c) large spacing =
      // harvest:
      // compatibleWith: []
