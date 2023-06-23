export default function RearchitectingTable() {
  return (
    <section className="rearchitecting-table">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          How is Software Rearchitecting different from &nbsp;
          <span className="text-blue">Refactoring & Rewriting?</span>
        </h2>
        <div className="rearchitecting-view">
          <div className="row">
            <div className="col-md-12">
              <div className="table-different table-responsive">
                <table className="table table-bordered border-primary-subtle">
                  <thead>
                    <tr>
                      <th scope="col">Factor</th>
                      <th scope="col">Rewriting</th>
                      <th scope="col">Refactor</th>
                      <th scope="col">Rearchitecting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Code</td>
                      <td>Complete Rewriting</td>
                      <td>Minor Changes</td>
                      <td>Moderate changes</td>
                    </tr>
                    <tr>
                      <td>Functionality</td>
                      <td>New</td>
                      <td>Code functionality same</td>
                      <td>Can stay same or change (depends on need)</td>
                    </tr>
                    <tr>
                      <td>Integration</td>
                      <td>Custom code for integrations</td>
                      <td>complex</td>
                      <td>External & internal services integration</td>
                    </tr>
                    <tr>
                      <td>System Stability</td>
                      <td>Depends on code</td>
                      <td>Lower</td>
                      <td>Higher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
