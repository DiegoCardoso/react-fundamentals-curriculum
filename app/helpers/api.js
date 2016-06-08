import { get } from 'axios'

const url = (city) => `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&lang=pt&type=accurate&units=metric&APPID=9b2bf35e6560a4be461f2e19d877d340&cnt=5`

export const getForecast = (city) => {
    return get(url(city))
            .then((response) => response.data)
            .then((data) => {
                return {
                    city: data.city.name,
                    country: data.city.country,
                    list: data.list.map((day) => ({
                        max: day.temp.max,
                        min: day.temp.min,
                        description: day.weather[0].description,
                        icon: day.weather[0].icon,
                    })),
                }
            })
}

