import React from 'react';
import { useAppContext } from '@/context/AppContext';

export function AlgoTrainingPanel() {
  const { appState } = useAppContext();
  const [selectedStrategy, setSelectedStrategy] = React.useState('momentum');
  const [backtestPeriod, setBacktestPeriod] = React.useState('7d');
  const [isTraining, setIsTraining] = React.useState(false);

  const strategies = [
    { id: 'momentum', name: 'Momentum Trading', description: 'Buy high-momentum tokens' },
    { id: 'reversal', name: 'Mean Reversion', description: 'Buy dips, sell peaks' },
    { id: 'volume', name: 'Volume Breakout', description: 'Trade on volume spikes' },
    { id: 'pattern', name: 'Pattern Recognition', description: 'ML-based pattern detection' }
  ];

  const periods = [
    { id: '1d', name: '1 Day' },
    { id: '7d', name: '7 Days' },
    { id: '30d', name: '30 Days' },
    { id: '90d', name: '90 Days' }
  ];

  const handleStartTraining = () => {
    setIsTraining(true);
    // TODO: Implement training logic
    setTimeout(() => setIsTraining(false), 3000);
  };

  return (
    <div className="h-full p-4 space-y-6 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Algo Training Lab</h2>
        <p className="text-gray-600 text-sm">
          Train and optimize trading algorithms using historical data and machine learning
        </p>
      </div>

      {/* Strategy Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Select Strategy Type</h3>
        <div className="grid grid-cols-1 gap-2">
          {strategies.map((strategy) => (
            <button
              key={strategy.id}
              onClick={() => setSelectedStrategy(strategy.id)}
              className={`
                p-3 rounded-lg border text-left transition-colors
                ${selectedStrategy === strategy.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className="font-medium text-gray-800">{strategy.name}</div>
              <div className="text-sm text-gray-600">{strategy.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Training Parameters */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Training Parameters</h3>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Backtest Period
          </label>
          <select
            value={backtestPeriod}
            onChange={(e) => setBacktestPeriod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {periods.map((period) => (
              <option key={period.id} value={period.id}>
                {period.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Volume SOL
            </label>
            <input
              type="number"
              defaultValue="10"
              step="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Position Size
            </label>
            <input
              type="number"
              defaultValue="1.0"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Current Token Context */}
      {appState.dashboardState.activeMint && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <h4 className="font-medium text-yellow-800 mb-1">Training Target</h4>
          <p className="text-sm text-yellow-700">
            Current token: {appState.dashboardState.activeMint.slice(0, 8)}...
          </p>
          <p className="text-xs text-yellow-600 mt-1">
            Training will focus on this token's historical patterns
          </p>
        </div>
      )}

      {/* Training Actions */}
      <div className="space-y-3">
        <button
          onClick={handleStartTraining}
          disabled={isTraining}
          className={`
            w-full py-3 px-4 rounded-lg font-medium transition-colors
            ${isTraining
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
            }
          `}
        >
          {isTraining ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Training Algorithm...
            </div>
          ) : (
            'Start Training'
          )}
        </button>

        {isTraining && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="text-sm text-blue-800 font-medium mb-2">Training Progress</div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <div className="text-xs text-blue-600 mt-1">
              Analyzing patterns and optimizing parameters...
            </div>
          </div>
        )}
      </div>

      {/* Training Results (placeholder) */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-800 mb-2">Previous Training Results</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div>• Last trained: Never</div>
          <div>• Best strategy: None</div>
          <div>• Backtest performance: N/A</div>
        </div>
      </div>
    </div>
  );
}
