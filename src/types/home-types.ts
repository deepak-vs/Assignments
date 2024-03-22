export interface CountryData {
    country: string
    countryInfo: {
      flag: string
      _id: number
    }
    active: number
  }

  export interface IASLiveReportCardProps {
    currentPage: number
    lastIndex: number
    size: number
    setCurrentPage: Function
  }

  export interface ICountryReportCardProps {
    country: string
    flag: string
    activeCases: number
  }