export interface IDashboardModuleProps {
    initDashboard: () => void;
    currentNetwork: {
        name: string;
        id: string;
    } | null;
}