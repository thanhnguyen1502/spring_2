import React, {useEffect, useState} from 'react';
import {findEmployee} from "../service/EmployeeService";
import ReactPaginate from "react-paginate";
import moment from "moment";


function Employee() {
    const [employee, setEmployee] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 10;

    const [totalPages, setTotalPages] = useState(0);
    const getListEmployee = async () => {
        const listEmployee = await findEmployee(currentPage, pageSize);
        if (listEmployee) {
            setTotalPages(listEmployee.totalPages);
            setEmployee(listEmployee.content);
        }
    };

    function handleChangePage(pageable) {
        if (currentPage + 1 === totalPages && pageable.isNext === true)
            return false;
        if (pageable.isNext === true) {
            setCurrentPage(pageable.selected + 1);
        } else {
            setCurrentPage(pageable.selected - 1);
        }
    }

    function handleClickPage(page) {
        setCurrentPage(page.selected);
    }

    useEffect(() => {
        getListEmployee();
    }, []);

    useEffect(() => {
        getListEmployee();
    }, [currentPage]);
    return (
        <>
            <div>
                <h1 className="text-center mt-5">List Employee</h1>
            </div>
            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name Employee</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Salary</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employee &&
                            employee.map((employees, index) => (
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{employees.nameEmployee}</td>
                                    <td>{employees.gender=="True"?"Men":"Women"}</td>
                                    <td>{moment(employees.dateOfBirth).format("DD/MM/YYYY")}</td>
                                    <td>{new Intl.NumberFormat().format(employees.salary ?? 0)}<span> đ</span></td>
                                    <td>{employees.address}</td>
                                    <td>{employees.phoneNumber}</td>
                                    <td>{employees.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-light d-none d-sm-table-cell"
                                            data-bs-target="#staticBackdrop"
                                            data-bs-toggle="modal"
                                            type="button"
                                        >
                                            <img width="25" height="20" src="https://img.icons8.com/doodle/48/delete-sign.png" alt="delete-sign"/>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        {employee?.length === 0 && (
                            <tr className="text-center">
                                <td colSpan={7} style={{fontSize: "16px"}}>
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="col-1"></div>
            </div>
            {totalPages > 0 && (
                <div className=" d-flex justify-content-center">
                    <ReactPaginate
                        previousLabel="Trước"
                        nextLabel="Sau"
                        pageCount={totalPages}
                        onPageChange={handleClickPage}
                        onClick={handleChangePage}
                        containerClassName="pagination"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        activeClassName="active"
                        activeLinkClassName="page-link"
                        forcePage={currentPage}
                        pageRangeDisplayed={2} // Hiển thị 3 trang trên mỗi lần render
                        marginPagesDisplayed={1} // Hiển thị 1 trang ở đầu và cuối danh sách trang
                    />
                </div>
            )}
        </>
    );
}

export default Employee;
