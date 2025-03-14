const initialState = {
  loading: false,
  categories: null,
  certLoading: false,
  expLoading: false,
  certificates: [],
  experience: [],
  serviceLoading: false,
  services: [],
  availableDays: [],
  bookingSlots: [],
  ordersLoading: false,
  ordersError: '',
  orders: [],
  waiting: [],
  accepted: [],
  inprogress: [],
  completed: [],
  cancelled: [],
  rejected: [],
  feedbackCategory: [],
  currentLocation: null,
  artistDiscovires: [],
  studiosDiscovires: [],
  discoviresLoading: false,
  discoviresError: null,
  consumerBrowse: null,
  consumerBrowseError: null,
  consumerBrowseLoading: false,
  cart: [],
  artistServices: null,
  cartLoading: null,
  cartError: null,
  addToCartLoading: false,
  addToCartError: false,
  artistBookingSlots: null,
  artistBookingSlotsLoading: false,
  artistBookingSlotsError: null,
  consumerOrder: {
    consumerMood: '',
    artistTimeSLot: null,
    bookingNote: '',
    artistId: '',
    note: '',
  },
};

import {
  GET_CATEGORIES,
  GET_CATEGORIES_DATA,
  GET_CERTIFICATES_DATA,
  GET_EXPERIENCE_DATA,
  GET_SERVICES,
  GET_SERVICES_DATA,
  GET_SERVICES_ERROR,
  GET_AVAILABLE_DAYS,
  GET_BOOKING_SLOTS,
  GET_ORDERS,
  GET_ORDERS_DATA,
  GET_ORDERS_ERROR,
  GET_CURRENT_LOCATION,
  GET_DISCOVERIES,
  GET_DISCOVERIES_DATA,
  GET_DISCOVERIES_ERROR,
  GET_CONSUMER_BROWSE,
  GET_CONSUMER_BROWSE_DATA,
  GET_CONSUMER_BROWSE_ERROR,
  REMOVE_FROM_CART,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_ERROR,
  GET_CART_ITEM,
  GET_CART_ITEM_LOADING,
  GET_CART_ITEM_ERROR,
  GET_SERVICES_ALL_DATA,
  GET_ARTIST_SLOTS,
  GET_ARTIST_SLOTS_LOADING,
  GET_ARTIST_SLOTS_ERROR,
  CONSUMER_ORDER,
} from '../constants/constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload,
        laoding: false,
      };

    case 'GET_CERTIFICATES':
      return {
        ...state,
        certLoading: true,
      };
    case GET_CERTIFICATES_DATA:
      return {
        ...state,
        certificates: action.payload,
        certLoading: false,
      };

    case 'GET_EXPERIENCE':
      return {
        ...state,
        expLoading: true,
      };
    case GET_EXPERIENCE_DATA:
      return {
        ...state,
        experience: action.payload,
        expLoading: false,
      };
    case GET_SERVICES:
      return {
        ...state,
        serviceLoading: true,
      };
    case GET_SERVICES_DATA:
      return {
        ...state,
        services: action.payload,
        serviceLoading: false,
      };
    case GET_SERVICES_ALL_DATA:
      return {
        ...state,
        artistServices: action.payload,
        serviceLoading: false,
      };
    case GET_SERVICES_ERROR:
      return {
        ...state,
        services: [],
        serviceLoading: false,
      };
    case GET_AVAILABLE_DAYS:
      return {
        ...state,
        availableDays: action.payload,
      };
    case GET_BOOKING_SLOTS:
      return {
        ...state,
        bookingSlots: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        ordersLoading: true,
      };
    case GET_ORDERS_DATA:
      return {
        ...state,
        ordersLoading: false,
        orders: action.payload,
        waiting: action.payload.Waiting,
        accepted: action.payload.Accepted,
        inprogress: action.payload.InProgress,
        completed: action.payload.Completed,
        // cancelled: action.payload.Cancelled,
        cancelled: action.payload.Rejected,
        rejected: action.payload.Rejected,
      };
    case GET_ORDERS_ERROR:
      return {
        ...state,
        ordersLoading: false,
        ordersError: 'Orders Found Error',
      };
    case GET_DISCOVERIES:
      return {
        ...state,
        discoviresLoading: true,
      };
    case GET_DISCOVERIES_DATA:
      return {
        ...state,
        discoviresLoading: false,
        artistDiscovires: action.payload.artists,
        studiosDiscovires: action.payload.studios,
      };
    case GET_DISCOVERIES_ERROR:
      return {
        ...state,
        discoviresLoading: false,
        discoviresError: 'Discovires not found',
      };

    case GET_CONSUMER_BROWSE:
      return {
        ...state,
        discoviresLoading: true,
      };
    case GET_CONSUMER_BROWSE_DATA:
      return {
        ...state,
        discoviresLoading: false,
        consumerBrowse: action.payload,
      };
    // consumerBrowse: { },
    // consumerBrowseError: null,
    //   consumerBrowseLoading: false,
    case GET_CONSUMER_BROWSE_ERROR:
      return {
        ...state,
        consumerBrowseLoading: false,
        consumerBrowseError: 'Browse not found',
      };
    case 'GET_FEEDBACK_CATEGORY':
      return {
        ...state,
        feedbackCategory: action.payload,
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case GET_CART_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_CART_ITEM_LOADING:
      console.log('GET_CART_ITEM_LOADING', action.payload);
      return {
        ...state,
        cartLoading: action.payload,
      };
    case GET_CART_ITEM_ERROR:
      return {
        ...state,
        cartError: action.payload,
      };
    case ADD_TO_CART_LOADING:
      return {
        ...state,
        addToCartLoading: action.payload,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        addToCartError: action.payload,
      };
    //     artistBookingSlots: null,
    // artistBookingSlotsLoading: false,
    // artistBookingSlotsError: null,
    // consumerMood: '',
    case GET_ARTIST_SLOTS:
      return {
        ...state,
        artistBookingSlots: action.payload,
      };
    case GET_ARTIST_SLOTS_LOADING:
      return {
        ...state,
        artistBookingSlotsLoading: action.payload,
      };
    case GET_ARTIST_SLOTS_ERROR:
      return {
        ...state,
        artistBookingSlotsError: action.payload,
      };
    case CONSUMER_ORDER:
      return {
        ...state,
        ...state.consumerOrder,
        consumerOrder: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
