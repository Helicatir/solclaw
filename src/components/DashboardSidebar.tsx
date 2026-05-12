import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { SetupPanel } from './SetupPanel';
import { WorkspacePanel } from './WorkspacePanel';
import { NurseryPanel } from './NurseryPanel';
import { AlgoTradingTabs } from './AlgoTradingTabs';

export function DashboardSidebar() {
  const { appState } = useAppContext();
  const { sidebarMode } = appState.dashboardState;

  switch (sidebarMode) {
    case 'dashboard':
      return <AlgoTradingTabs />;
    case 'nursery':
      return <NurseryPanel />;
    case 'setup':
      return <SetupPanel />;
    case 'code':
      return <WorkspacePanel />;
    default:
      return <AlgoTradingTabs />;
  }
}
