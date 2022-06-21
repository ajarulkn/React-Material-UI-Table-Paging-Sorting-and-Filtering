import React, { useState } from 'react'
import { db } from '../util/firebase-config'

const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export async function getDepartmentCollection1() {
    var data = [];
    const querySnapshot = await db.collection("Department").get();
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.data().deptId, title: doc.data().title });
    });
    return data;
}

export async function getDepartmentData() {
    let map = new Map();
    const querySnapshot = await db.collection("Department").get();
    querySnapshot.forEach((doc) => {
        map.set(doc.data().deptId, { ...doc.data(), id: doc.id })
    });
    return map;
}

export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)

    //const empref = collection(db, "employee");
    //addDoc(empref, data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export async function getAllEmployees() {
    let dept = new Map();
    dept = await getDepartmentData()

    const querySnapshot = await db.collection("employee").get();
    const data = []
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            department: dept.get(doc.data().departmentId).title
        });
    });
    return data;
}