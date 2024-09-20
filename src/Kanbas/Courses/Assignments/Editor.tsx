export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-genre"> Assignment Group </label>
            </td>
            <td>
              <select id="wd-select-one-genre">
                <option selected value="ASSIGNMENT">Assignment</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-genre"> Display Grade as </label>
            </td>
            <td>
              <select id="wd-select-one-genre">
                <option selected value="PRECENTAGE">Precentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-genre"> Submission Type </label>
            </td>
            <td>
              <select id="wd-select-one-genre">
                <option selected value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          
          <tr>
            <td align="left" valign="top">
              
            </td>
            <td>
              <label>Online Entry Options</label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-check" />
            </td>
            <td>
              <label htmlFor="wd-check">Text Entry</label>            
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-check" />
            </td>
            <td>
              <label htmlFor="wd-check">Website URL</label>            
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-check" />
            </td>
            <td>
              <label htmlFor="wd-check">Media Recordings</label>            
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-check" />
            </td>
            <td>
              <label htmlFor="wd-check"> Student Annotation</label>            
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-check" />
            </td>
            <td>
              <label htmlFor="wd-check">File Uploads</label>            
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Asign Asign to</label>
            </td>
            <td>
              <input id="wd-points" value={"everyone"} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-dob"> Due </label>
            </td>
            <td>
              <input type="date"
                  id="wd-text-fields-dob"
                  value="2024-05-13"/><br/>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-dob"> Available from </label>
            </td>
            <td>
              <input type="date"
                  id="wd-text-fields-dob"
                  value="2024-05-13"/><br/>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-dob"> Until </label>
            </td>
            <td>
              <input type="date"
                  id="wd-text-fields-dob"
                  value="2024-05-13"/><br/>
            </td>
          </tr>

          <tr>
            <td align= "right">
            <button>Cancel</button>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>

        </table>
      </div>
  );}
  