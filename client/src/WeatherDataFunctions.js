import { CloudSnow, CloudMoon, CloudLightning, BrightnessHigh, MoonStars, Cloud, CloudHaze, CloudDrizzle, CloudLightningRain, Rainbow } from 'react-bootstrap-icons'


//statisitcal functions

export function statCloudCover(forcast) {



    let maxData = Math.max(...forcast.map(fc => parseInt(fc.cloudcover)))
    let avgValues = forcast.map(fc => parseInt(fc.cloudcover))
    let sum = avgValues.reduce((partialSum, a) => partialSum + a, 0);
    let avgData = sum / forcast.length
    let minData = Math.min(...forcast.map(fc => parseInt(fc.cloudcover)))

    let statData = [maxData, Math.floor(avgData), minData]

    return statData

}

export function statHumidity(forcast) {



    let maxData = Math.max(...forcast.map(fc => parseInt(fc.rh2m)))
    let avgValues = forcast.map(fc => parseInt(fc.rh2m))
    let sum = avgValues.reduce((partialSum, a) => partialSum + a, 0);
    let avgData = sum / forcast.length
    let minData = Math.min(...forcast.map(fc => parseInt(fc.rh2m)))

    let statData = [maxData, avgData.toFixed(2), minData]

    return statData

}

export function statPrec(forcast) {



    let maxData = Math.max(...forcast.map(fc => parseInt(fc.prec_amount)))
    let avgValues = forcast.map(fc => parseInt(fc.prec_amount))
    let sum = avgValues.reduce((partialSum, a) => partialSum + a, 0);
    let avgData = sum / forcast.length
    let minData = Math.min(...forcast.map(fc => parseInt(fc.prec_amount)))

    let statData = [maxData, Math.floor(avgData), minData]

    return statData

}

export function statLiftedIndex(forcast) {



    let maxData = Math.max(...forcast.map(fc => parseInt(fc.lifted_index)))
    let avgValues = forcast.map(fc => parseInt(fc.lifted_index))
    let sum = avgValues.reduce((partialSum, a) => partialSum + a, 0);
    let avgData = sum / forcast.length
    let minData = Math.min(...forcast.map(fc => parseInt(fc.lifted_index)))

    let statData = [maxData, Math.floor(avgData), minData]

    return statData

}

export function statTemp(forcast) {



    let maxData = Math.max(...forcast.map(fc => parseInt(fc.temp2m)))
    let avgValues = forcast.map(fc => parseInt(fc.temp2m))
    let sum = avgValues.reduce((partialSum, a) => partialSum + a, 0);
    let avgData = sum / forcast.length
    let minData = Math.min(...forcast.map(fc => parseInt(fc.temp2m)))

    let statData = [maxData, avgData.toFixed(2), minData]

    return statData

}



//data translation functions

const cloudCoverArr = ["0%-6",
    "6%-19%",
    "19%-31%",
    "31%-44%",
    "44%-56%",
    "56%-69%",
    "69%-81%",
    "81%-94%",
    "94%-100%"]


export function cloudCoverage(number) {

    return cloudCoverArr[number - 1]


}


const percipitationArr = [
    "0",
    "0-0.25mm/hr",
    "0.25-1mm/hr",
    "1-4mm/hr",
    "4-10mm/hr",
    "10-16mm/hr",
    "16-30mm/hr",
    "30-50mm/hr",
    "50-75mm/hr",
    "Over 75mm/hr"
]

export function percipitationAmount(number) {

    return percipitationArr[number]


}


const windSpeedArray = [
    "Below 0.3m/s (calm)",
    "0.3-3.4m/s (light)",
    "3.4-8.0m/s (moderate)",
    "8.0-10.8m/s (fresh)",
    "10.8-17.2m/s (strong)",
    "17.2-24.5m/s (gale)",
    "24.5-32.6m/s (storm)",
    "Over 32.6m/s (hurricane)"

]

export function windSpeed(number) {

    return windSpeedArray[number - 1]


}


export function dateConversion(date) {

    if (date !== undefined) {

        let dateStr = date.toString()
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);

        let fixedDate = `Date:  ${month}/${day}/${year}`

        return fixedDate
    }

    else console.log("date invalid")
}

export function calcGMTShiftInit(lng, gmtInit) {

    let gmtCalc = Math.ceil(Math.abs((lng) / 15)) * Math.sign((lng) / 15)

    let dateStr = gmtInit.toString()
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    const hour = dateStr.slice(8, 10);
    let fixedDate = `Date:  ${month}/${day}/${year}`

    let gmtShiftInit = parseInt(hour) + parseInt(gmtCalc)

    return gmtShiftInit
}

export function calcLocationTime(lng) {

    // add GMT to locally caclulated time to get time in GMT
    let today = new Date()
    const localTimetoGMT = parseInt(today.getHours()) + parseInt(today.getTimezoneOffset()) / 60 // + ':' + today.getMinutes()    


    //use longitude to calculate time shift from GMT
    let gmtCalc = Math.abs((lng) / 15) < 1 ? 0 : Math.ceil(Math.abs((lng) / 15)) * Math.sign((lng) / 15)


    const locationTime = parseInt(localTimetoGMT) + parseInt(gmtCalc) > 24 ? parseInt(localTimetoGMT) + parseInt(gmtCalc) - 24 + ':' + today.getMinutes() : parseInt(localTimetoGMT) + parseInt(gmtCalc) + ':' + today.getMinutes()

    return locationTime

}






export function filterWeather(weather) {

    let output = ""

    switch (weather) {
        case "clearday":
            output = < BrightnessHigh size={50} />;
            break;

        case "clearnight":
            output = < MoonStars size={50} />;
            break;

        case "pcloudyday":
        case "mcloudyday":
        case "cloudyday":
            output = < Cloud size={50} />;
            break;

        case "pcloudynight":
        case "mcloudynight":
        case "cloudynight":
            output = < CloudMoon size={50} />;
            break;

        case "humidday":
        case "humidnight":
            output = < CloudHaze size={50} />;
            break;

        case "lightrainday":
        case "lightrainnight":
        case "oshowerday":
        case "oshowernight":
        case "ishowerday":
        case "ishowernight":
        case "rainday":
        case "rainnight":
            output = < CloudDrizzle size={50} />;
            break;

        case "lightsnowday":
        case "lightsnownight":
        case "snowday":
        case "snownight":
            output = < CloudSnow size={50} />;
            break;

        case "tsday":
        case "tsnight":
            output = < CloudLightning size={50} />;
            break;

        case "tsrainday":
        case "tsrainnight":
            output = < CloudLightningRain size={50} />;
            break;

        default:
            output = < Rainbow size={50} />;
    }
    return output;

}



export function filterWeatherString(weather) {

    let output = ""

    switch (weather) {
        case "clearday":
        case "clearnight":
            output = "Total cloud cover less than 20%";
            break;

        case "pcloudyday":
        case "pcloudynight":
            output = "Total cloud cover between 20%-60%";
            break;

        case "mcloudyday":
        case "mcloudynight":
            output = "Total cloud cover between 60%-80%";
            break;

        case "cloudyday":
        case "cloudynight":
            output = "Total cloud cover over over 80%";
            break;

        case "humidday":
        case "humidnight":
            output = "Relative humidity over 90% with total cloud cover less than 60%";
            break;

        case "lightrainday":
        case "lightrainnight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover more than 80%";
            break;

        case "oshowerday":
        case "oshowernight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%";
            break;

        case "ishowerday":
        case "ishowernight":
            output = "Precipitation rate less than 4mm/hr with total cloud cover less than 60%";
            break;

        case "rainday":
        case "rainnight":
            output = "Precipitation rate over 4mm/hr";
            break;


        case "lightsnowday":
        case "lightsnownight":
        case "snowday":
        case "snownight":
            output = "Snow with precipitation rate over 4mm/hr";
            break;

        case "tsday":
        case "tsnight":
            output = "Lifted Index less than -5 with precipitation rate below 4mm/hr";
            break;

        case "tsrainday":
        case "tsrainnight":
            output = "Lifted Index less than -5 with precipitation rate over 4mm/hr";
            break;

        default:
            output = `${weather}`;
    }
    return output;
}