import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComp = (props)=>{
    return(
        <div>
            <Modal show={props.modal} onHide={props.modalClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Data</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form>
                                        <table>
                                            <tr>
                                                <td>Nama</td>
                                                <td>
                                                    <input defaultValue={props.nama} className="form-control form-control-sm" type="text" onChange={props.changeNama} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kewarganegaraan</td>
                                                <td>
                                                    <input defaultValue={props.warganegara} className="form-control form-control-sm" type="text" onChange={props.changeWarganegara} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Agama</td>
                                                <td>
                                                <select defaultValue={props.agama} className="custom-select custom-select-sm" name="agama" id="agama" onChange={props.changeAgama}>
                                                    <option>Pilih...</option>
                                                    <option value="Islam">Islam</option>
                                                    <option value="Kristen">Kristen</option>
                                                    <option value="Budha">Budha</option>
                                                    <option value="Hindu">Hindu</option>
                                                </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td className="col-md-3">
                                                    <input type="radio" checked={props.status === 'Lajang'} name="status" value="Lajang" onChange={props.changeStatus}  />Lajang
                                                    <input type="radio" checked={props.status === 'Sudah Menikah'} name="status" value="Sudah Menikah" onChange={props.changeStatus}  />Sudah Menikah
                                                    <input type="radio" checked={props.status === 'Cerai'} name="status" value="Cerai" onChange={props.changeStatus}  />Cerai
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ekonomi</td>
                                                <td className="col-md-3">
                                                    <input type="radio" checked={props.ekonomi === 'Kebawah'} name="ekonomi" value="Kebawah" onChange={props.changeEkonomi}  />Kebawah
                                                    <input type="radio" checked={props.ekonomi === 'Menengah'} name="ekonomi" value="Menengah" onChange={props.changeEkonomi}  />Menengah
                                                    <input type="radio" checked={props.ekonomi === 'Keatas'} name="ekonomi" value="Keatas" onChange={props.changeEkonomi}  />Keatas
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Gol. Darah</td>
                                                <td>
                                                    <select defaultValue={props.gol} className="custom-select custom-select-sm" name="gol" id="gol" onChange={props.changeGol}>
                                                        <option>Pilih...</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="O">O</option>
                                                        <option value="AB">AB</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Alamat</td>
                                                <td><textarea defaultValue={props.alamat} className="form-control" type="text" onChange={props.changeAlamat} /></td>
                                            </tr>
                                            <tr>
                                                <td>Pekerjaan</td>
                                                <td><input defaultValue={props.job} className="form-control" type="text" onChange={props.changeJob} /></td>
                                                <td><input className="btn btn-warning" type="reset" defaultValue="Reset" /></td>
                                            </tr>
                                        </table>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={props.modalClose}>
                                        Tutup
                                    </Button>
                                    <Button variant="primary" onClick={props.handleFormSubmit}>
                                        Simpan
                                    </Button>
                                </Modal.Footer>
                            </Modal>
        </div>
    )
}

export default ModalComp;


