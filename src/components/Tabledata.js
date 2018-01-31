import React, { Component } from 'react';
import './TableStyle.css'
import data from './dummyDataTable.json'

//Components
import Tablehead from './Tablehead'
import Tablebody from './Tablebody'
import Searchname from './Searchname'
import Selectshow from './Selectshow'
import Pagebutton from './Pagebutton'

class Tabledata extends Component {

  constructor() {
    super()
    this.state = {
      initialData: [],
      data: [],
      sortBy: '',
      show: 5,
      current: 1,
      pageNumber: []
    }

    this.sort = this.sort.bind(this)
    this.filterName = this.filterName.bind(this)
    this.showSelect = this.showSelect.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount() {

    var pageNumber = []

    for(var i = 1; i <= Math.ceil(data.length/5); i++) {
      pageNumber.push(i)
    }

    this.setState({
      initialData: data,
      data: data.slice(0,this.state.show),
      pageNumber: pageNumber
    })

  }

  sort(by) {
    var sortData = data
    sortData.sort(((a,b) => {
      if(a[by] > b[by]) {
        return (this.state.sortBy === '' || this.state.sortBy === 'dsc')? 1: -1
      }
      else if(a[by] < b[by]) {
        return (this.state.sortBy === '' || this.state.sortBy === 'dsc')? -1: 1
      } else {
        return 0
      }
    }))

    this.setState({
      data: sortData.slice(0,this.state.show),
      sortBy: (this.state.sortBy === '' || this.state.sortBy === 'dsc')? 'asc': 'dsc'
    })
  }

  filterName(name) {
    var regex = new RegExp(name, 'i')
    var filterData = data.filter((element) => {
      return regex.test(element.name)
    })

    this.setState({
      current: 1,
      data: filterData.slice(0, this.state.show)
    })
  }

  showSelect(num) {
    var initialData = this.state.initialData
    var data = initialData.slice(0, num)
    var pageNumber = []

    for(var i = 1; i <= Math.ceil(initialData.length/num); i++) {
      pageNumber.push(i)
    }

    this.setState({ show: num, data: data, pageNumber: pageNumber })
  }

  changePage(page) {

    const { show, initialData } = this.state    
    const indexLast = page * show
    const indexFirst = indexLast - show

    this.setState({
      current: page,
      data: initialData.slice(indexFirst, indexLast)
    })
  }

  render() {
    return(
      <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Selectshow show={this.state.show} showSelect={this.showSelect} />
          <Searchname filterName={this.filterName} />
        </div>
        <table id="tableDataStyle">
          <Tablehead sort={this.sort} />
          <Tablebody show={this.state.show} dataTable = {this.state.data} />
        </table>
        <div style={{display: "flex", justifyContent: 'flex-end'}}>
          <Pagebutton current={this.state.current} changePage={this.changePage} pageNumber={this.state.pageNumber} />
        </div>
      </div>
    )
  }
}

export default Tabledata