const pricing = [
    {
        plan: 'Free',
        cost: 0,
        features: [
            '10 users included',
            '2 GB of storage\n',
            'Email support\n',
            'Help center access\n',
        ],
        buttonLabel: 'sign up for free',
        buttonUrl: '...'
    },
    {
        plan: 'Pro',
        cost: 10,
        features: [
            '10 users included',
            '10 GB of storage\n',
            'Email support\n',
            'Help center access\n',
        ],
        buttonLabel: 'PAGARE!!!!',
        buttonUrl: '...'
    },
    {
        plan: 'Super',
        cost: 29,
        features: [
            '30 users included',
            '15 GB of storage\n',
            'Email support\n',
            'Help center access\n',
        ],
        buttonLabel: 'PAGARE!!!!',
        buttonUrl: '...'
    }
]

export function Pricing() {
    return (
        <>
        {/* PRICING HEADER */}
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
          <p className="fs-5 text-body-secondary">
            Quickly build an effective pricing table for your potential customers
            with this Bootstrap example. It’s built with default Bootstrap
            components and utilities with little customization.
          </p>
          </div>

        {/* PRICING */}
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {
                pricing.map(item => {
                    return (
                        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{item.plan}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${item.cost}<small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {
                        item.features.map((f: string) => {
                            return <li>{f}</li>
                        })
                    }
                </ul>
                <a
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                  href={item.buttonUrl}
                >
                  {item.buttonLabel}
                </a>
              </div>
            </div>
          </div>
                    )
                })
            }

        </div>
        
        </>
    )
}
