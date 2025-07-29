'use client';
import React, { useState } from 'react'; 
import Sidebar, { User } from '../../Component/Home/SideBar/Sidebar';

const KYCForm = ({ onSubmit, platformUserId, username, email }: { onSubmit: (formData: { firstName: string; lastName: string; platformUserId: string; username: string; email: string; nin: string; bvn: string }) => void; platformUserId?: string; username?: string; email?: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nin, setNin] = useState('');
  const [bvn, setBvn] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, platformUserId: platformUserId || '', username: username || '', email: email || '', nin, bvn });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Complete Your KYC</h2>
      <p className="mb-4">Please provide your KYC details to activate your wallet.</p>
      <form onSubmit={handleSubmit}>
        {platformUserId && (
          <div className="mb-4">
            <label htmlFor="platformUserId" className="block text-sm font-medium text-gray-700">Platform User ID</label>
            <input
              id="platformUserId"
              type="text"
              value={platformUserId}
              readOnly
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nin" className="block text-sm font-medium text-gray-700">National Identification Number (NIN)</label>
          <input
            id="nin"
            type="text"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bvn" className="block text-sm font-medium text-gray-700">Bank Verification Number (BVN)</label>
          <input
            id="bvn"
            type="text"
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit KYC</button>
      </form>
    </div>
  );
};

const DepositForm = ({ onSubmit, onClose }: { onSubmit: (amount: number) => void; onClose: () => void }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      onSubmit(depositAmount);
      onClose();
    } else {
      alert('Please enter a valid positive amount.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Deposit Fiat</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="depositAmount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              id="depositAmount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const WalletDashboard = ({ fiatBalance, cryptoBalance, onDeposit }: { fiatBalance: number; cryptoBalance: number; onDeposit: (amount: number) => void }) => {
  const [showDepositForm, setShowDepositForm] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Wallet Dashboard</h2>
      <div className="mb-4">
        <p className="text-lg text-gray-700">Fiat Balance:</p>
        <p className="text-2xl font-semibold">${fiatBalance.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg text-gray-700">Crypto Balance:</p>
        <p className="text-2xl font-semibold">${cryptoBalance.toFixed(2)}</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setShowDepositForm(true)}
          className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Deposit
        </button>
        <button className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Withdraw</button>
      </div>

      {showDepositForm && <DepositForm onSubmit={onDeposit} onClose={() => setShowDepositForm(false)} />}
    </div>
  );
};

export default function TalentDashboard () {
  const [isWalletActivated, setIsWalletActivated] = useState(false);
  const [showKYCForm, setShowKYCForm] = useState(false);
  const [kycError, setKycError] = useState<string | null>(null);
  const [fiatBalance, setFiatBalance] = useState(0); 
  const [cryptoBalance, setCryptoBalance] = useState(0);
  
  const currentUser: User & { id?: string; username?: string; email?: string } = {
    role: 'Talent',
    avatar: '/vercel.svg',
    name: 'Talent User',
    id: 'user123', 
    username: 'talent_user', 
    email: 'talent.user@example.com',
  };

  const fetchUserBalances = async (userId: string) => {
    const balanceApiUrl = `https://glass-wallet.onrender.com/api/wallets/${userId}`;
    try {
      const response = await fetch(balanceApiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFiatBalance(data.fiatBalance || 0); // Assuming API returns fiatBalance
      setCryptoBalance(data.cryptoBalance || 0);
    } catch (error: unknown) {
      console.error('Error fetching user balances:', error);
      setKycError('Failed to fetch balances. Please try again later.'); 
    }
  };

  const handleActivateWallet = () => {
    console.log('Attempting to activate wallet...');
    setShowKYCForm(true); 
    setKycError(null); 
  };

  const handleKYCSubmit = async (formData: { firstName: string; lastName: string; platformUserId: string; username: string; email: string; nin: string; bvn: string }) => {
    const { firstName, lastName, platformUserId, username, email, nin, bvn } = formData;

    const userId = currentUser.id || 'temp-user-id';

    const walletApiUrl = `https://glass-wallet.onrender.com/api/wallets/${userId}/create`;

    try {
      const response = await fetch(walletApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, platformUserId, username, email, nin, bvn }), // Sending all KYC data
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      console.log('Wallet created successfully!');
      setShowKYCForm(false);
      setIsWalletActivated(true); 
      setKycError(null); 
      fetchUserBalances(userId);

    } catch (error: unknown) {
      console.error('Error creating wallet:', error);
      if (error instanceof Error) {
        setKycError(error.message || 'Failed to create wallet. Please try again.');
      } else {
        setKycError('An unknown error occurred while creating the wallet.');
      }
    }
  };

  const handleFiatDeposit = async (amount: number) => {
    const userId = currentUser.id || 'temp-user-id';
    const depositApiUrl = `https://glass-wallet.onrender.com/api/wallets/deposit/fiat`;

    try {
      const response = await fetch(depositApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, amount }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      console.log('Fiat deposit successful!');
      fetchUserBalances(userId);

    } catch (error: unknown) {
      console.error('Error during fiat deposit:', error);
      if (error instanceof Error) {
        setKycError(error.message || 'Failed to process deposit. Please try again.');
      } else {
        setKycError('An unknown error occurred during deposit.');
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={true} 
        setSidebarOpen={() => {}}
        currentUser={currentUser}
        currentView="dashboard" 
        setCurrentView={() => {}} 
        handleLogout={() => console.log('Logout from Talent Dashboard')}
      />
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Talent Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome, Talent! This is your dashboard.</p>

        {!isWalletActivated && !showKYCForm && (
          <button
            onClick={handleActivateWallet}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Activate Wallet
          </button>
        )}

        {showKYCForm && (
          <>
            <KYCForm onSubmit={handleKYCSubmit} platformUserId={currentUser.id} username={currentUser.username} email={currentUser.email} />
            {kycError && <p className="text-red-500 mt-4">{kycError}</p>}
          </>
        )}

        {isWalletActivated && !showKYCForm && <WalletDashboard fiatBalance={fiatBalance} cryptoBalance={cryptoBalance} onDeposit={handleFiatDeposit} />}

      </div>
    </div>
  );
};
