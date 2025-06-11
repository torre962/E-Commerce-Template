import { lazy } from "react";
import { Link } from "react-router-dom";
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const CartView = () => {
  const onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Carro de la compra</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Producto</th>
                      <th scope="col" width={120}>
                        Cantidad
                      </th>
                      <th scope="col" width={150}>
                        Precio
                      </th>
                      <th scope="col" className="text-end" width={130}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-3 d-none d-md-block">
                            <img
                              src="../../images/products/tshirt_red_480x400.webp"
                              width="80"
                              alt="..."
                            />
                          </div>
                          <div className="col">
                            <Link
                              to="/product/detail"
                              className="text-decoration-none"
                            >
                              Otro nombre de algún producto va justo aquí
                            </Link>
                            <p className="small text-muted">
                              Size: XL, Color: blue, Brand: XYZ
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="input-group input-group-sm mw-140">
                          <button
                            className="btn btn-primary text-white"
                            type="button"
                          >
                            <i className="bi bi-dash-lg"></i>
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="1"
                          />
                          <button
                            className="btn btn-primary text-white"
                            type="button"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <var className="price">$237.00</var>
                        <small className="d-block text-muted">
                          $79.00 each
                        </small>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-secondary me-2">
                          <i className="bi bi-heart-fill"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-3 d-none d-md-block">
                            <img
                              src="../../images/products/tshirt_grey_480x400.webp"
                              width="80"
                              alt="..."
                            />
                          </div>
                          <div className="col">
                            <Link
                              to="/product/detail"
                              className="text-decoration-none"
                            >
                              Otro nombre de algún producto va justo aquí
                            </Link>
                            <p className="small text-muted">
                              Size: XL, Color: blue, Brand: XYZ
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="input-group input-group-sm mw-140">
                          <button
                            className="btn btn-primary text-white"
                            type="button"
                          >
                            <i className="bi bi-dash-lg"></i>
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="1"
                          />
                          <button
                            className="btn btn-primary text-white"
                            type="button"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <var className="price">$237.00</var>
                        <small className="d-block text-muted">
                          $79.00 each
                        </small>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-secondary me-2">
                          <i className="bi bi-heart-fill"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-end">
                  Realizar Compra <i className="bi bi-chevron-right"></i>
                </Link>
                <Link to="/" className="btn btn-secondary">
                  <i className="bi bi-chevron-left"></i> Seguir comprando
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <i className="bi bi-truck"></i> Entrega gratuita en 1-2 semanas
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total precio:</dt>
                  <dd className="col-6 text-end">$1,568</dd>

                  <dt className="col-6 text-success">Descuento:</dt>
                  <dd className="col-6 text-success text-end">-$58</dd>
                  <dt className="col-6 text-success">
                    Cupon: <span className="small text-muted">EXAMPLE</span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">-$68</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end  h5">
                    <strong>$1,350</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img
                    src="../../images/payment/payments.webp"
                    alt="..."
                    height={26}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light border-top p-4">
        <div className="container">
          <h6>Política de pagos y reembolsos</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartView;
