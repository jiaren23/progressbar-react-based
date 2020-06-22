import TaiwanPostalCode from './TaiwanPostalCode.json'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.postalCode = TaiwanPostalCode;
        this.cities = Object.keys(TaiwanPostalCode); // 抓取 json 的 所有key 值 以陣列方式存進 this.cities
        this.state = {
            city: "基隆市", // 讓 select 預設是 新竹市
        }
    }

    citiesHandler = (e) => {
        console.log(this.state) // 打印出 上一次選擇的
        const { name, value } = e.target
        this.setState(
            { [name]: value },
            () => { console.log(this.state) } // 這裡才會是 當次選擇的
        )
        console.log(this.state) // 原先以為這裡已經是setState 後更新了 但因為 setState 是非同步 所以這邊打印出來結果也會是 上一次選擇的
    }

    getCities = (cities) => {
       return  cities.map((city) => {
            return (<option key={city}>{city}</option>)
            /* 這裡 option 裡面有個 key 屬性 是react 特有的屬性 ，可以丟入 值或是索引 讓react 知道這段陣列 是重複的將不再重複 render 以增加效能 */
        })
    }

    render = ()=>{
        // 這裡是在 render function 的 return 之前 所以可以在此進行 變數相關作業 再塞入底下 return 進行 正式的 render
        const optionCities = this.getCities(this.cities)

        return (
            <div>
                <label htmlFor="">
                    城市
                    <select name="cities" onChange={this.citiesHandler} value={this.state.city}>
                        {optionCities}
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    市/區
                    <select name="" id="">
                        <option value="">中正區</option>
                        <option value="">大同區</option>
                    </select>
                </label>
            </div>

        )
    }
}
