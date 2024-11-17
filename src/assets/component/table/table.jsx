import './index.css'

function Table() {


    return (
      <>
       <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Project Title</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Client</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Website Redesign</td>
                    <td>$1,500 to $2,200</td>
                    <td>2022 Dec 12</td>
                    <td>Web Biz</td>
                </tr>
                <tr>
                    <td>Website Renovation</td>
                    <td>$2,500 to $3,600</td>
                    <td>2022 Dec 10</td>
                    <td>Online Ads</td>
                </tr>
                <tr>
                    <td>Marketing Plan</td>
                    <td>$2,500 to $4,200</td>
                    <td>2022 Dec 8</td>
                    <td>Web Biz</td>
                </tr>
                <tr>
                    <td>All-new Website</td>
                    <td>$3,000 to $6,600</td>
                    <td>2022 Dec 2</td>
                    <td>Web Presence</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
    )
  }
  
  export default Table
  