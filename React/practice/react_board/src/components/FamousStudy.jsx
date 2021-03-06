import React, { useState } from 'react';
import StudyList from './StudyList';

const FamousStudy = () => {
    
    const famousList = [
        {
            lno: 1,
            ltype: '면접',
            lname: '요기요 2차 면접 스터디'
        },
        {
            lno: 2,
            ltype: '기업분석',
            lname: '엔테크 인턴 스터디'
        },
        {
            lno: 3,
            ltype: '면접',
            lname: '삼성전자 DS 원데이'
        },
        {
            lno: 4,
            ltype: '면접',
            lname: 'SK C&C 임원 면접 대비'
        },
        {
            lno: 5,
            ltype: '어학',
            lname: '오픽 스터디'
        }
    ];
    
    const [list, setList] = useState(famousList);

    return (
        <div className="listBox">
            <div className="listTitle">
                인기 있는 스터디
            </div>
            <StudyList list={list}/>
        </div>
    );
}

export default FamousStudy;