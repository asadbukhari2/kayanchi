import React from 'react';
import { Image, Text, View } from 'react-native';
import plus from '../../../../assets/plus.png';
import travelIcon from '../../../../assets/travel_brown.png';
import hostingIcon from '../../../../assets/hosting_brown.png';
import { styles } from '../styles/ServiceDetiailCard.style';
// id: 2,
//     title: 'Hydra Facial',
//         off: 0,
//             price: 1500,
//                 reachTime: '1-2 hours',
//                     travel: true,
//                         hosting: true,
const ServiceDetiailCard = ({ id, title, off, price, reachTime, travel, hosting }) => {
    const calculatePrice = (discount, actualPrice) => {
        let val = (discount / 100) * actualPrice
        return actualPrice - val
    }
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
                <View style={[styles.plusBtnContainer]}>
                    <Image style={[styles.plusIcon]} source={plus} />
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
