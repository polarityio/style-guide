'use strict';
let Logger;

function startup(logger){
    Logger = logger;
}

function doLookup(entities, options, cb) {
    let entityResults = [];

    entities.forEach((entity) => {
        let summary = [entity.value];
        if(Array.isArray(entity.types) && entity.types.length > 0){
            entity.types.forEach(type => {
                summary.push(type);
            });
        }else{
            summary.push(entity.type);
        }

        if(Array.isArray(entity.channels)){
            entity.channels.forEach((channel) => {
                summary.push('#' + channel.name);
            })
        }

        entity.passwordOption = options.password;

        entityResults.push({
            entity: entity,
            displayValue: entity.value,
            data: {
                summary: summary,
                details: entity
            }
        });
    });

    cb(null, entityResults);
};


module.exports = {
    doLookup: doLookup,
    startup: startup
};
