import React from 'react';
import {MuiPickersUtilsProvider, DatePicker} from "material-ui-pickers";
import DateMomentUtils from "@date-io/moment";

const Pencarian=(props)=>{
    return(
        <div className="contentInput">
                    <div className="card">
                        <h5 class="card-header">
                            Pencarian
                        </h5>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <td style={{padding: "10px"}}>Jenis Kegiatan</td>
                                    <td>
                                        <select className="custom-select custom-select-sm" name="jenis" id="jenis" onChange={props.changeJenis}>
                                            <option value="">Pilih...</option>
                                            <option value="Makan">Makan</option>
                                            <option value="Tidur">Tidur</option>
                                            <option value="Aktifitas Lain">Aktifitas Lain</option>
                                            <option value="Olahraga">Olahraga</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Durasi (Menit)</td>
                                    <td><input className="form-control form-control-sm" type="number" onChange={props.changeDurasi} /></td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td>
                                        <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                            <div>
                                                <div>
                                                <DatePicker
                                                    clearable
                                                    value={props.tglAwal}
                                                    placeholder="Tanggal Awal"
                                                    onChange={props.handleTglAwal} 
                                                    minDate={new Date()}
                                                    format="MM/dd/yyyy"
                                                />
                                                </div>
                                            </div>
                                        </MuiPickersUtilsProvider>
                                    </td>
                                    <td>s / d</td>
                                    <td>
                                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                            <div>
                                                <div>
                                                <DatePicker
                                                    clearable
                                                    value={props.tglAkhir}
                                                    placeholder="Tanggal Akhir"
                                                    onChange={props.handleTglAkhir} 
                                                    minDate={props.tglAwal}
                                                    format="MM/dd/yyyy"
                                                />
                                                </div>
                                            </div>
                                        </MuiPickersUtilsProvider>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="card-footer">
                            <div style={{float:"left"}}>
                                <button className="btn btn-primary" type="button" onClick={props.pencarian}>Cari Data</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-warning" type="button" onClick={props.refresh}>Refresh</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Pencarian;