export type WeatherResponseType = {
    coord: {
        lon: number,
        lat: number,
      },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string,
    },
    name: string,
    sys: {
        country: string,
    },
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number
        temp_max: number,
        temp_min: number,
    }
}