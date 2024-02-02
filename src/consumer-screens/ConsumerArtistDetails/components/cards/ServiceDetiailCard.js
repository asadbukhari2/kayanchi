import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import plus from '../../../../assets/plus.png';
import minus from '../../../../assets/minus.png';
import travelIcon from '../../../../assets/travel_brown.png';
import hostingIcon from '../../../../assets/hosting_brown.png';
import { styles } from '../styles/ServiceDetiailCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../redux/actions/commonActions';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const ServiceDetiailCard = ({ id, title, off, price, reachTime, travel, hosting }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    const calculatePrice = (discount, actualPrice) => {
        let val = (discount / 100) * actualPrice;
        return actualPrice - val;
    };
    const [cardCartItem, setCardCartItem] = useState({});
    const cart = useSelector(state => state.common.cart);
    console.log('this is the id', id);
    const calculateCartItem = (idItem, cartItem) => {
        return cartItem.filter(item => item.service_id === idItem)[0];
    };
    const handleAddToCart = () => {
        console.log('add to the cart in service detail page');
        const sampleData = {
            quantity: 1,
            service_id: 'c28c63f7-7255-40e7-a874-4ed6e847fd34'
        };
        dispatch(addToCart(sampleData, token));
    }
    useEffect(() => {
        setCardCartItem(calculateCartItem(id, cart));
    }, []);
    return (
        <View style={[styles.container]}>
            <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemStart]}>
                <View>
                    <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>
                        <Text style={[styles.heading]}>{title}</Text>
                        {off > 0 && <Text style={[styles.offerContainer]}>{off}% Off</Text>}
                    </View>
                    <View>
                        {off > 0 ? (
                            <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>
                                <Text style={[styles.colorBlue]}>Rs {calculatePrice(off, price)}</Text>
                                <Text style={[styles.colorGray, off > 0 && styles.textLilneThrough, styles.marginLeft10]}>
                                    Rs {price}
                                </Text>
                            </View>
                        ) : (
                            <Text style={[styles.colorBlue]}>Rs {price}</Text>
                        )}
                    </View>
                </View>
                <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemCenter]}>

                    {cardCartItem?.id?.length > 0 && <View style={[styles.plusBtnContainer]}>
                        <Image style={[styles.plusIcon]} source={minus} />
                    </View>}


                    {cardCartItem?.id?.length > 0 && <Text style={[styles.colorBlack, styles.fontSize10, styles.marginHorizontal5]}>{cardCartItem?.quantity}</Text>}

                    <TouchableOpacity onPress={() => handleAddToCart()} style={[styles.plusBtnContainer]}>
                        <Image style={[styles.plusIcon]} source={plus} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
                <View>
                    <Text style={[styles.colorGray]}>Takes 40 min</Text>
                </View>
                <View style={[styles.flex, styles.flexDirectionRow, styles.justifyBetween, styles.alignItemCenter]}>
                    {travel && <Image style={[styles.icons, styles.marginLeft10]} source={travelIcon} />}
                    {hosting && <Image style={[styles.icons, styles.marginLeft10]} source={hostingIcon} />}
                    <Text style={[styles.marginLeft10, styles.link]}>View</Text>
                </View>
            </View>
        </View>
    );
};

export default ServiceDetiailCard;
