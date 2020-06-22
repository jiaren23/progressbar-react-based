import TaiwanPostalCode from './TaiwanPostalCode.json'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.postalCode = TaiwanPostalCode;
        this.cities = Object.keys(TaiwanPostalCode);
        this.state = {
            city: "台北市",
            district: "",
            postalCode: "",
            address: ""
        }
    }

    // citiesHandler = (e) => {
    //     const { name, value } = e.target
    //     if (name == "city" && this.state.city != value) {  //這裡為了解決 選了新市後 區沒辦法跟上 而去在背後一樣保留上一次的區資料
    //         this.setState(
    //             {
    //                 [name]: value,
    //                 district: ""
    //             },
    //             () => { console.log(this.state) }
    //         )
    //     } else {
    //         this.setState({ [name]: value },
    //             () => { console.log(this.state) }
    //         )
    //     }
    // }

    citiesHandler = (e) => {
        const { name, value } = e.target
        let mergeObject = {};
        if (name == "city" && this.state.city != value) {  //這裡為了解決 選了新市後 區沒辦法跟上 而去在背後一樣保留上一次的區資料
            mergeObject['district'] = "";
            mergeObject['postalCode'] = "";
        } else if(name == "district" && this.state.district != value){
            const citiesData = this.postalCode[this.state.city];
            const postalCode = citiesData[value];
            mergeObject['postalCode'] = postalCode;
        }

        this.setState({ ...mergeObject , [name]: value },
           () => { console.log(this.state) }
        )
        
    }

    getCities = (cities) => {
        return cities.map((city) => {
            return (<option key={city} value={city}>{city}</option>)
        })
    }
    getDistricts = (districts) => {
        return districts.map((district) => {
            return (<option key={district} value={district}>{district}</option>)
        })
    }

    render = () => {
        const citiesData = this.postalCode[this.state.city]
        const districts = Object.keys(citiesData) // 找到市底下的區
        const optionCities = this.getCities(this.cities)
        const optionDistricts = this.getDistricts(districts)
        return (
            <div>
                <label htmlFor="">
                    城市
                    <select name="city" onChange={this.citiesHandler} value={this.state.city}>
                        {optionCities}
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    市/區
                    <select name="district" onChange={this.citiesHandler} value={this.state.district}>
                        {optionDistricts}
                    </select>
                </label>
                <br/>
                <label>
                    郵遞區號
                    <input type="text" name="postalCode" value={this.state.postalCode} disabled={true} />  {/* disabled={true} 讓使用者不會誤輸入 */}
                </label>
                <br/>
                地址
                <label htmlFor="">
                    <input type="text" name="address" onChange={this.citiesHandler}/>
                </label>
            </div>
        )
    }
}
