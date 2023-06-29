import React, { memo, useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { useAxios } from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import { HyundaievDetailContent } from '../../styled/tamraevStyle';
import Loading from '../../components/Loading';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const hyundaievDetail = memo(() => {
   const {
      data: hyundaievData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/d2838db41ae39fca68746e5588af70e6ba874bf3/hyundaiev.json',
   );
   const { hyundaievID } = useParams();

   return !loading && hyundaievData ? (
      <Loading />
   ) : (
      <HyundaievDetailContent>
         <Nav />
         <div className="hyundaievDetailBox">
            {hyundaievData
               .filter(item => item.id === Number(hyundaievID))
               .map(item => (
                  <div className="detailView" key={item.id}>
                     <h3>{item.name}</h3>
                     <img src={item.mainImage} alt="" />
                     <p>모터</p>
                     <table>
                        <colgroup>
                           <col className="wid1" />
                           <col className="wid2" />
                        </colgroup>
                        <tbody>
                           <tr>
                              <th>연료</th>
                              <td>{item.motor.fuel}</td>
                           </tr>
                           <tr>
                              <th>최고출력</th>
                              <td>{item.motor.maximumOutput}</td>
                           </tr>
                           <tr>
                              <th>최대토크</th>
                              <td>{item.motor.maximumTorque}</td>
                           </tr>
                        </tbody>
                     </table>
                     <p>배터리</p>
                     <table>
                        <colgroup>
                           <col className="wid1" />
                           <col className="wid2" />
                        </colgroup>
                        <tbody>
                           <tr>
                              <th>주행거리</th>
                              <td>{item.battery.mileage}</td>
                           </tr>
                           <tr>
                              <th>용량</th>
                              <td>{item.battery.capacity}</td>
                           </tr>
                           <tr>
                              <th>타입</th>
                              <td>{item.battery.type}</td>
                           </tr>
                        </tbody>
                     </table>
                     <p>치수</p>
                     <table>
                        <colgroup>
                           <col className="wid1" />
                           <col className="wid2" />
                        </colgroup>
                        <tbody>
                           <tr>
                              <th>전장/전폭</th>
                              <td>{item.size.fullFullLength}</td>
                           </tr>
                           <tr>
                              <th>전고/축거</th>
                              <td>{item.size.wholeHeightBusting}</td>
                           </tr>
                           <tr>
                              <th>공차중량</th>
                              <td>{item.size.weight}</td>
                           </tr>
                           <tr>
                              <th>전륜타이어</th>
                              <td>{item.size.frontWheelTire}</td>
                           </tr>
                           <tr>
                              <th>후륜타이어</th>
                              <td>{item.size.rearTire}</td>
                           </tr>
                        </tbody>
                     </table>
                     <p>오너평가</p>
                     <table>
                        <colgroup>
                           <col className="wid1" />
                           <col className="wid2" />
                        </colgroup>
                        <tbody>
                           <tr>
                              <th>주행</th>
                              <td>{item.ownerEvaluation.scoreByItem.driving}</td>
                           </tr>
                           <tr>
                              <th>주행거리</th>
                              <td>{item.ownerEvaluation.scoreByItem.mileage}</td>
                           </tr>
                           <tr>
                              <th>디자인</th>
                              <td>{item.ownerEvaluation.scoreByItem.design}</td>
                           </tr>
                           <tr>
                              <th>가격</th>
                              <td>{item.ownerEvaluation.scoreByItem.price}</td>
                           </tr>
                           <tr>
                              <th>거주성</th>
                              <td>{item.ownerEvaluation.scoreByItem.habitability}</td>
                           </tr>
                           <tr>
                              <th>품질</th>
                              <td>{item.ownerEvaluation.scoreByItem.quality}</td>
                           </tr>
                           <tr>
                              <th>총점</th>
                              {item.ownerEvaluation.averageScore !== '-' ? (
                                 <td>
                                    {item.ownerEvaluation.averageScore}
                                    <StarRatings
                                       numberOfStars={5}
                                       rating={item.ownerEvaluation.averageScore / 2}
                                       starDimension="20px"
                                       starRatedColor="#002c5f"
                                       starSpacing="0px"
                                    />
                                 </td>
                              ) : (
                                 <td>데이터가 존재하지 않습니다.</td>
                              )}
                           </tr>
                        </tbody>
                     </table>
                     <div className="paging">
                        {hyundaievID > 1 && (
                           <button className="btn prev">
                              <Link to={`/hyundaievDetail/${hyundaievID - 1}`}>
                                 <i className="xi-angle-left"></i>이전글
                              </Link>
                           </button>
                        )}
                        <button className="list">
                           <Link to={`/hyundaievList`}>목록보기</Link>
                        </button>
                        {hyundaievID < hyundaievData.length && (
                           <button className="btn next">
                              <Link to={`/hyundaievDetail/${Number(hyundaievID) + 1}`}>
                                 다음글<i className="xi-angle-right"></i>
                              </Link>
                           </button>
                        )}
                     </div>
                  </div>
               ))}
         </div>
      </HyundaievDetailContent>
   );
});

export default hyundaievDetail;
