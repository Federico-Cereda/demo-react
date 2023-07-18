export function Compare() {
    return(
        <>
        {/* COMPARE PLANES */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol id="check" viewBox="0 0 16 16">
                <title>Check</title>
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </symbol>
        </svg>
        
        <h2 className="display-6 text-center mb-4">Compare plans</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }} />
                <th style={{ width: "22%" }}>Free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Public
                </th>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Private
                </th>
                <td />
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Permissions
                </th>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td />
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Unlimited members
                </th>
                <td />
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Extra security
                </th>
                <td />
                <td />
                <td>
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#check" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}
