const BarChart = () => {
  return (
    <div className='data'>
    <table>
      <tr>
        <td><label>外倾性(E)</label></td>
        <td>
          <div className="g-container-a">
            <div className="g-progress-a"></div>
          </div>
        </td>
        <td><label>内倾性(I)</label></td>
      </tr>

      <tr>
        <td><label>现实型(S)</label></td>
        <td>
          <div className="g-container-b">
            <div className="g-progress-b"></div>
          </div>
        </td>
        <td><label>直觉型(N)</label></td>
      </tr>
      <tr>
        <td><label>理性型(T)</label></td>
        <td>
          <div className="g-container-c">
            <div className="g-progress-c"></div>
          </div>
        </td>
        <td><label>情感型(F)</label></td>
      </tr>
      <tr>
        <td><label>计划型(J)</label></td>
        <td>
          <div className="g-container-d">
            <div className="g-progress-d"></div>
          </div>
        </td>
        <td><label>发散型(P)</label></td>
      </tr>

    </table>

  </div>
  )

}

export default BarChart;