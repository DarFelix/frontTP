import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { InitDashboardRoutes } from './InitDashboardRoutes';
import { WaitDashboardRoutes } from './WaitDashboardRoutes'
import { TopDashboardRoutes } from './TopDashboardRoutes'

export const AppRouter = () => {

    let dashboard = <InitDashboardRoutes/>;

    let now = new Date();
    let timeEvent = new Date(now.getFullYear(), now.getMonth(), 15, 0, 0, 0, 0);
    let timeCloseInscriptions = new Date(now.getFullYear(), now.getMonth(), 12, 0, 0, 0, 0);

    let timeBeforeCount = timeEvent-now;
    let closeIncriptionsCount = timeCloseInscriptions - now;
   
    if( closeIncriptionsCount < 0 && timeBeforeCount > 0 ){
    dashboard = <WaitDashboardRoutes/>;
    }
    if (timeBeforeCount < 0){
    dashboard = <TopDashboardRoutes/>;
    }

     
    return (
        <BrowserRouter>
            {
                dashboard
            }
        </BrowserRouter>
    )
}
  