'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var periodTypes = exports.periodTypes = [{
    label: 'Daily',
    value: 'Daily'
}, {
    label: 'Weekly',
    value: 'Weekly'
}, {
    label: 'Weekly Wednesday',
    value: 'WeeklyWednesday'
}, {
    label: 'Weekly Thursday',
    value: 'WeeklyThursday'
}, {
    label: 'Weekly Saturday',
    value: 'WeeklySaturday'
}, {
    label: 'Weekly Sunday',
    value: 'WeeklySunday'
}, {
    label: 'Bi weekly',
    value: 'BiWeekly'
}, {
    label: 'Monthly',
    value: 'Monthly'
}, {
    label: 'Bi-monthly',
    value: 'BiMonthly'
}, {
    label: 'Quarterly',
    value: 'Quarterly'
}, {
    label: 'Six monthly',
    value: 'SixMonthly'
}, {
    label: 'Six monthly starting in April',
    value: 'SixMonthlyApril'
}, {
    label: 'Six monthly starting in November',
    value: 'SixMonthlyNov'
}, {
    label: 'Yearly',
    value: 'Yearly'
}, {
    label: 'Financial year starting in April',
    value: 'FinancialApril'
}, {
    label: 'Financial year starting in July',
    value: 'FinancialJuly'
}, {
    label: 'Financial year starting in October',
    value: 'FinancialOct'
}, {
    label: 'Financial year starting in November',
    value: 'FinancialNov'
}];

var getPeriodTypesResponse = exports.getPeriodTypesResponse = {
    periodTypes: [{
        frequencyOrder: 1,
        name: 'Daily',
        isoDuration: 'P1D',
        isoFormat: 'yyyyMMdd'
    }, {
        frequencyOrder: 7,
        name: 'Weekly',
        isoDuration: 'P7D',
        isoFormat: 'yyyyWn'
    }, {
        frequencyOrder: 7,
        name: 'WeeklyWednesday',
        isoDuration: 'P7D',
        isoFormat: 'yyyyWedWn'
    }, {
        frequencyOrder: 7,
        name: 'WeeklyThursday',
        isoDuration: 'P7D',
        isoFormat: 'yyyyThuWn'
    }, {
        frequencyOrder: 7,
        name: 'WeeklySaturday',
        isoDuration: 'P7D',
        isoFormat: 'yyyySatWn'
    }, {
        frequencyOrder: 7,
        name: 'WeeklySunday',
        isoDuration: 'P7D',
        isoFormat: 'yyyySunWn'
    }, {
        frequencyOrder: 14,
        name: 'BiWeekly',
        isoDuration: 'P14D',
        isoFormat: 'yyyyBiWn'
    }, {
        frequencyOrder: 30,
        name: 'Monthly',
        isoDuration: 'P1M',
        isoFormat: 'yyyyMM'
    }, {
        frequencyOrder: 61,
        name: 'BiMonthly',
        isoDuration: 'P2M',
        isoFormat: 'yyyyMMB'
    }, {
        frequencyOrder: 91,
        name: 'Quarterly',
        isoDuration: 'P3M',
        isoFormat: 'yyyyQn'
    }, {
        frequencyOrder: 182,
        name: 'SixMonthly',
        isoDuration: 'P6M',
        isoFormat: 'yyyySn'
    }, {
        frequencyOrder: 182,
        name: 'SixMonthlyApril',
        isoDuration: 'P6M',
        isoFormat: 'yyyyAprilSn'
    }, {
        frequencyOrder: 182,
        name: 'SixMonthlyNov',
        isoDuration: 'P6M',
        isoFormat: 'yyyyNovSn'
    }, {
        frequencyOrder: 365,
        name: 'Yearly',
        isoDuration: 'P1Y',
        isoFormat: 'yyyy'
    }, {
        frequencyOrder: 365,
        name: 'FinancialApril',
        isoDuration: 'P1Y',
        isoFormat: 'yyyyApril'
    }, {
        frequencyOrder: 365,
        name: 'FinancialJuly',
        isoDuration: 'P1Y',
        isoFormat: 'yyyyJuly'
    }, {
        frequencyOrder: 365,
        name: 'FinancialOct',
        isoDuration: 'P1Y',
        isoFormat: 'yyyyOct'
    }, {
        frequencyOrder: 365,
        name: 'FinancialNov',
        isoDuration: 'P1Y',
        isoFormat: 'yyyyNov'
    }]
};

var parsedDays = exports.parsedDays = [{
    endDate: '2019-02-01',
    id: '20190201',
    name: 'February 1, 2019',
    startDate: '2019-02-01',
    type: 'Daily'
}, {
    endDate: '2019-02-02',
    id: '20190202',
    name: 'February 2, 2019',
    startDate: '2019-02-02',
    type: 'Daily'
}, {
    endDate: '2019-02-03',
    id: '20190203',
    name: 'February 3, 2019',
    startDate: '2019-02-03',
    type: 'Daily'
}, {
    endDate: '2019-02-04',
    id: '20190204',
    name: 'February 4, 2019',
    startDate: '2019-02-04',
    type: 'Daily'
}, {
    endDate: '2019-02-05',
    id: '20190205',
    name: 'February 5, 2019',
    startDate: '2019-02-05',
    type: 'Daily'
}, {
    endDate: '2019-02-06',
    id: '20190206',
    name: 'February 6, 2019',
    startDate: '2019-02-06',
    type: 'Daily'
}, {
    endDate: '2019-02-07',
    id: '20190207',
    name: 'February 7, 2019',
    startDate: '2019-02-07',
    type: 'Daily'
}, {
    endDate: '2019-02-08',
    id: '20190208',
    name: 'February 8, 2019',
    startDate: '2019-02-08',
    type: 'Daily'
}, {
    endDate: '2019-02-09',
    id: '20190209',
    name: 'February 9, 2019',
    startDate: '2019-02-09',
    type: 'Daily'
}, {
    endDate: '2019-02-10',
    id: '20190210',
    name: 'February 10, 2019',
    startDate: '2019-02-10',
    type: 'Daily'
}, {
    endDate: '2019-02-11',
    id: '20190211',
    name: 'February 11, 2019',
    startDate: '2019-02-11',
    type: 'Daily'
}, {
    endDate: '2019-02-12',
    id: '20190212',
    name: 'February 12, 2019',
    startDate: '2019-02-12',
    type: 'Daily'
}, {
    endDate: '2019-02-13',
    id: '20190213',
    name: 'February 13, 2019',
    startDate: '2019-02-13',
    type: 'Daily'
}, {
    endDate: '2019-02-14',
    id: '20190214',
    name: 'February 14, 2019',
    startDate: '2019-02-14',
    type: 'Daily'
}, {
    endDate: '2019-02-15',
    id: '20190215',
    name: 'February 15, 2019',
    startDate: '2019-02-15',
    type: 'Daily'
}, {
    endDate: '2019-02-16',
    id: '20190216',
    name: 'February 16, 2019',
    startDate: '2019-02-16',
    type: 'Daily'
}, {
    endDate: '2019-02-17',
    id: '20190217',
    name: 'February 17, 2019',
    startDate: '2019-02-17',
    type: 'Daily'
}, {
    endDate: '2019-02-18',
    id: '20190218',
    name: 'February 18, 2019',
    startDate: '2019-02-18',
    type: 'Daily'
}, {
    endDate: '2019-02-19',
    id: '20190219',
    name: 'February 19, 2019',
    startDate: '2019-02-19',
    type: 'Daily'
}, {
    endDate: '2019-02-20',
    id: '20190220',
    name: 'February 20, 2019',
    startDate: '2019-02-20',
    type: 'Daily'
}, {
    endDate: '2019-02-21',
    id: '20190221',
    name: 'February 21, 2019',
    startDate: '2019-02-21',
    type: 'Daily'
}, {
    endDate: '2019-02-22',
    id: '20190222',
    name: 'February 22, 2019',
    startDate: '2019-02-22',
    type: 'Daily'
}, {
    endDate: '2019-02-23',
    id: '20190223',
    name: 'February 23, 2019',
    startDate: '2019-02-23',
    type: 'Daily'
}, {
    endDate: '2019-02-24',
    id: '20190224',
    name: 'February 24, 2019',
    startDate: '2019-02-24',
    type: 'Daily'
}, {
    endDate: '2019-02-25',
    id: '20190225',
    name: 'February 25, 2019',
    startDate: '2019-02-25',
    type: 'Daily'
}, {
    endDate: '2019-02-26',
    id: '20190226',
    name: 'February 26, 2019',
    startDate: '2019-02-26',
    type: 'Daily'
}, {
    endDate: '2019-02-27',
    id: '20190227',
    name: 'February 27, 2019',
    startDate: '2019-02-27',
    type: 'Daily'
}, {
    endDate: '2019-02-28',
    id: '20190228',
    name: 'February 28, 2019',
    startDate: '2019-02-28',
    type: 'Daily'
}];